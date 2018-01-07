import {Component} from 'react';
import PropTypes from 'prop-types';

// ------------------------------------
// Main component
// ------------------------------------

class FirebaseAuthState extends Component {
  constructor(props) {
    super(props);

    // Will be null, false or object
    this.state = {user: null};
  }

  static propTypes = {
    render: PropTypes.func,
    onChange: PropTypes.func,
    firebase: PropTypes.object.isRequired
  };

  componentDidMount() {
    const {firebase} = this.props;

    // Firebase Auth Change
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user: user || false});
    });
  }

  render() {
    const {onChange, render} = this.props;
    const {user} = this.state;

    if (onChange) {
      onChange(user);
    }

    return render ? render(user) : null;
  }
}

export default FirebaseAuthState;
