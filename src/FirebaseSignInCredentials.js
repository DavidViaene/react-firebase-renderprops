import {Component} from 'react';
import PropTypes from 'prop-types';

// ------------------------------------
// Main component
// ------------------------------------

class FirebaseSignInCredentials extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
  };

  render() {
    const {firebase, email, password, onSuccess, onError} = this.props;
    //TODO loading render prop instead of return null?
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        if (onSuccess) {
          onSuccess(result);
        }
      })
      .catch(error => {
        if (onError) {
          onError(error);
        }
      });

    return null;
  }
}

export default FirebaseSignInCredentials;
