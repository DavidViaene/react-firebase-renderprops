import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class FirebaseReferencePush extends Component {
  static propTypes = {
    reference: PropTypes.object,
    render: PropTypes.func.isRequired,
    payload: PropTypes.object
  };

  render() {
    const {reference, render, payload} = this.props;

    const pushRef = reference.push(payload);

    return render(pushRef);
  }
}

export default FirebaseReferencePush;
