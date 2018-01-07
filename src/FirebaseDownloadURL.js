import {Component} from 'react';
import PropTypes from 'prop-types';

class FirebaseDownloadURL extends Component {
  constructor(props) {
    super(props);

    this.loadPaths = this.loadPaths.bind(this);
    this.blockLoadPaths = false;

    this.state = {
      urls: null
    };
  }

  static propTypes = {
    storage: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired,
    path: PropTypes.string,
    paths: PropTypes.array
  };

  componentDidMount() {
    this.loadPaths();
  }

  componentWillReceiveProps(nextProps) {
    const {path, paths} = this.props;

    // If these properties change, we try to download the urls again
    if (path !== nextProps.path || paths !== nextProps.paths) {
      this.blockLoadPaths = false;
    }
  }

  loadPaths() {
    const {storage, path, paths} = this.props;

    if (!this.blockLoadPaths) {
      if (paths && paths.length > 0) {
        Promise.all(paths.map(path => storage.ref(path).getDownloadURL()))
          .then(urls => {
            this.setState({urls});
          })
          .catch();
      }

      if (path) {
        storage
          .ref(path)
          .getDownloadURL()
          .then(url => {
            this.setState({urls: [url]});
          })
          .catch();
      }

      this.blockLoadPaths = true;
    }
  }

  render() {
    const {render} = this.props;
    const {urls} = this.state;

    this.loadPaths();

    return urls ? render(...urls) : render(null);
  }
}

export default FirebaseDownloadURL;
