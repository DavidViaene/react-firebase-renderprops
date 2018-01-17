import React from 'react';
import FirebaseSignInCredentials from './FirebaseSignInCredentials';
import firebase from '../jest/utils/firebase';
import {shallow} from 'enzyme';

describe('FirebaseSignInCredentials', () => {
  test('component instantiation does not break', () => {
    shallow(
      <FirebaseSignInCredentials
        firebase={firebase}
        email="test"
        password="test"
      />
    );
  });

  test('onSuccess is called', done => {
    expect.assertions(1);
    const onSuccessMock = jest.fn();
    shallow(
      <FirebaseSignInCredentials
        firebase={firebase}
        email="test"
        password="test"
        onSuccess={onSuccessMock}
      />
    );

    setTimeout(() => {
      expect(onSuccessMock.mock.calls.length).toEqual(1);
      done();
    }, 0);
  });

  test('onError is called', done => {
    expect.assertions(1);
    const onErrorMock = jest.fn();
    const rejectSignIn = {
      ...firebase,
      auth: () => ({
        signInWithEmailAndPassword: () => {
          return Promise.reject();
        }
      })
    };
    shallow(
      <FirebaseSignInCredentials
        firebase={rejectSignIn}
        email="test"
        password="test"
        onError={onErrorMock}
      />
    );

    setTimeout(() => {
      expect(onErrorMock.mock.calls.length).toEqual(1);
      done();
    });
  });
});
