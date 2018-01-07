import React from 'react';
import FirebaseStorage from './FirebaseStorage';
import firebase from '../jest/utils/firebase';
import {shallow} from 'enzyme';

describe('FirebaseStorage', () => {
  test('render prop is called', () => {
    const renderPropMock = jest.fn();
    const _firebaseStorage = shallow(
      <FirebaseStorage firebase={firebase} render={renderPropMock} />
    );
    expect(renderPropMock.mock.calls.length).toEqual(1);
  });
});
