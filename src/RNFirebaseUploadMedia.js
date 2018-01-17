import {Component} from 'react';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';
import RNFetchBlob from 'react-native-fetch-blob';

import {getExtension} from './helpers';

const fs = RNFetchBlob.fs;
const Blob = RNFetchBlob.polyfill.Blob;
window.Blob = Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;

class RNFirebaseUploadMedia extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
    mediaUri: PropTypes.string.isRequired,
    storagePath: PropTypes.string.isRequired,
    fileName: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    ext: PropTypes.string,
    render: PropTypes.func.isRequired
  };

  state = {
    success: false
  };

  mimetypes = {
    mov: 'video/quicktime',
    mp4: 'video/mp4',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    png: 'image/png'
  };

  componentDidMount() {
    const {firebase, mediaUri, storagePath, fileName, ext} = this.props;

    // Create uri, extension and mime
    const uploadUri =
      Platform.OS === 'ios' ? mediaUri.replace('file://', '') : mediaUri;

    // Mimetype & extension
    const extension = ext || getExtension(uploadUri);
    const mimetype = this.mimetypes[extension];

    //
    let uploadBlob = null;
    let imgRef = null;

    // Read uri through file system
    fs
      .readFile(uploadUri, 'base64')
      // Blob'it
      .then(data => Blob.build(data, {type: `${mimetype};BASE64`}))
      // Upload to Firebase
      .then(blob => {
        uploadBlob = blob;
        const storageRef = firebase.storage().ref(storagePath);

        imgRef = storageRef.child(`${fileName}.${extension}`);

        return imgRef.put(blob, {contentType: mimetype});
      })
      .then(() => {
        this.setState({success: true});
        uploadBlob.close();
      })
      .catch(err => {});
  }

  render() {
    const {render} = this.props;
    const {success} = this.state;

    return render(success);
  }
}

export default RNFirebaseUploadMedia;
