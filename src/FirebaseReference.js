import {Component} from 'react';
import PropTypes from 'prop-types';

// ------------------------------------
// Main component
// ------------------------------------

class FirebaseReference extends Component {
  constructor(props) {
    super(props);

    this.initFirebaseReferences = this.initFirebaseReferences.bind(this);
  }

  static propTypes = {
    firebase: PropTypes.object.isRequired,
    paths: PropTypes.array,
    path: PropTypes.string,
    render: PropTypes.func.isRequired
  };

  static defaultProps = {
    paths: []
  };

  initFirebaseReferences() {
    const {firebase, paths, path} = this.props;

    if (path) {
      return [firebase.database().ref(path)];
    }

    return paths.map(path => firebase.database().ref(path));
  }

  render() {
    const {render} = this.props;

    const references = this.initFirebaseReferences();

    return render(...references);
  }
}

export default FirebaseReference;
