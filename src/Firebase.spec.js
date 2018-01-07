import React from 'react';
import Firebase from './Firebase';
import {shallow} from 'enzyme';

const firebaseConfig = {
  databaseURL: 'test',
  storageBucket: 'test'
};

describe('Firebase', () => {
  test('render prop is called', () => {
    const mockRenderProp = jest.fn();
    const firebase = shallow(
      <Firebase render={mockRenderProp} config={firebaseConfig} />
    );
    expect(mockRenderProp.mock.calls.length).toEqual(1);
  });

  test('render prop is called if Firebase app already exists', () => {
    const mockRenderProp = jest.fn();
    jest.mock('firebase', () => ({
      apps: [{}]
    }));
    const firebase = shallow(
      <Firebase render={mockRenderProp} config={firebaseConfig} />
    );
    expect(mockRenderProp.mock.calls.length).toEqual(1);
  });
});
