import React from 'react';
import RNFirebaseUploadMedia from './RNFirebaseUploadMedia';
import firebase from '../jest/utils/firebase';
import {shallow} from 'enzyme';

const props = {
  firebase,
  mediaUri: 'test',
  storagePath: 'test',
  fileName: 42,
  ext: 'test'
};

describe('FirebaseUploadMedia', () => {
  test('render prop is called', () => {
    const renderPropMock = jest.fn();
    shallow(<RNFirebaseUploadMedia {...props} render={renderPropMock} />);

    expect(renderPropMock.mock.calls.length).toEqual(1);
  });
});
