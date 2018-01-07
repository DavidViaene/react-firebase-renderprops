import React, {Component} from 'react';
import PropTypes from 'prop-types';

// ------------------------------------
// Main component
// ------------------------------------

class FirebaseSignOut extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    render: PropTypes.func
  };

  state = {
    done: false
  };

  componentDidMount() {
    const {firebase, onSuccess, onError} = this.props;

    firebase
      .auth()
      .signOut()
      .then(result => {
        this.setState({done: true});
        if (onSuccess) {
          onSuccess(result);
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
    const {done} = this.state;
    return render ? render(done) : null;
  }
}

export default FirebaseSignOut;
