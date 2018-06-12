import { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';

// ------------------------------------
// Main component
// ------------------------------------

class Firebase extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired
  };

  render() {
    const { render, config } = this.props;

    const firebaseApp = firebase.apps.length
      ? firebase.apps[0]
      : firebase.initializeApp(config);

    return render(firebaseApp);
  }
}

export default Firebase;
