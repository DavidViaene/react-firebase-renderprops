import {Component} from 'react';
import PropTypes from 'prop-types';

class FirebaseReferenceActions extends Component {
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

    const actionRef = reference[action](payload);

    return render(actionRef);
  }
}

export default FirebaseReferenceActions;
