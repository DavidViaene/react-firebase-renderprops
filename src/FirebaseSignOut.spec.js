import React from 'react';
import FirebaseSignOut from './FirebaseSignOut';
import {shallow} from 'enzyme';
import firebase from '../jest/utils/firebase';

describe('FirebaseSignOut', () => {
  test('it can be instantiated', () => {
    const _firebaseSignOut = shallow(<FirebaseSignOut firebase={firebase} />);
  });

  test('render onSuccess is called', done => {
    expect.assertions(1);
    const onSuccessMock = jest.fn();
    const _firebaseSignOut = shallow(
      <FirebaseSignOut firebase={firebase} onSuccess={onSuccessMock} />
    );

    setTimeout(() => {
      expect(onSuccessMock.mock.calls.length).toEqual(1);
      done();
    }, 0);
  });

  test('render onError is called', done => {
    expect.assertions(1);
    const onErrorMock = jest.fn();
    const rejectedFirebaseSignOut = {
      ...firebase,
      auth: () => ({
        signOut: () => {
          return Promise.reject();
        }
      })
    };
    const _firebaseSignOut = shallow(
      <FirebaseSignOut
        firebase={rejectedFirebaseSignOut}
        onError={onErrorMock}
      />
    );

    setTimeout(() => {
      expect(onErrorMock.mock.calls.length).toEqual(1);
      done();
    }, 0);
  });
});
