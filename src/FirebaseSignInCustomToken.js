import {Component} from 'react';
import PropTypes from 'prop-types';

// ------------------------------------
// Main component
// ------------------------------------

class FirebaseSignInCustomToken extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    render: PropTypes.func
  };

  state = {
    user: null
  };

  componentDidMount() {
    const {firebase, token, onSuccess, onError} = this.props;

    firebase
      .auth()
      .signInWithCustomToken(token)
      .then(user => {
        this.setState({user});
        if (onSuccess) {
          onSuccess(user);
        }
      })
      .catch(error => {
        if (onError) {
          onError(error);
        }
      });
  }

  render() {
    const {render} = this.props;
    const {user} = this.state;

    return render ? render(user) : null;
  }
}

export default FirebaseSignInCustomToken;
