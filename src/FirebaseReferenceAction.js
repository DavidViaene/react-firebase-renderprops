import {Component} from 'react';
import PropTypes from 'prop-types';

class FirebaseReferenceAction extends Component {
  static propTypes = {
    reference: PropTypes.object,
    render: PropTypes.func.isRequired,
    payload: PropTypes.object,
    action: PropTypes.oneOf(['push', 'set'])
  };

  static defaultProps = {
    action: 'push'
  };

  render() {
    const {reference, render, payload, action} = this.props;

    const pushRef = reference[action](payload);

    return render(pushRef);
  }
}

export default FirebaseReferenceAction;
