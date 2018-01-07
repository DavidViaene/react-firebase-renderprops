import React from 'react';
import FirebaseAuthState from './FirebaseAuthState';
import {shallow} from 'enzyme';
import firebase from '../jest/utils/firebase';

describe('FirebaseAuthState', () => {
  test('render prop should be called', () => {
    const renderPropMock = jest.fn();
    const firebaseAuthState = shallow(
      <FirebaseAuthState
        render={renderPropMock}
        onChange={() => {}}
        firebase={firebase}
      />
    );
    expect(renderPropMock.mock.calls.length).toEqual(1);
  });
});
