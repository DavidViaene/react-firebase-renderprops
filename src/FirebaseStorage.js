import {Component} from 'react';
import PropTypes from 'prop-types';

// ------------------------------------
// Main component
// ------------------------------------

class FirebaseStorage extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired
  };

  render() {
    const {firebase, render} = this.props;

    const storage = firebase.storage();

    return render(storage);
  }
}

export default FirebaseStorage;
