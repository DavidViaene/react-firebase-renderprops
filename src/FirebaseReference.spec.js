import React from 'react';
import {shallow} from 'enzyme';
import FirebaseReference from './FirebaseReference';
import firebase from '../jest/utils/firebase';

describe('FirebaseReference', () => {
  test('calls render props', () => {
    const renderPropMock = jest.fn();
    const firebaseReference = shallow(
      <FirebaseReference firebase={{}} render={renderPropMock} />
    );
    expect(renderPropMock.mock.calls.length).toEqual(1);
  });

  test('calls render props with path', () => {
    const renderPropMock = jest.fn();
    const firebaseReference = shallow(
      <FirebaseReference
        firebase={firebase}
        render={renderPropMock}
        path="test"
      />
    );
    expect(renderPropMock.mock.calls.length).toEqual(1);
  });

  test('calls render props with path', () => {
    const renderPropMock = jest.fn();
    const firebaseReference = shallow(
      <FirebaseReference
        firebase={firebase}
        render={renderPropMock}
        paths={[{}]}
      />
    );
    expect(renderPropMock.mock.calls.length).toEqual(1);
  });
});
