import React from 'react';
import {shallow} from 'enzyme';
import FirebaseQuery from './FirebaseQuery';

describe('FirebaseQuery', () => {
  test('render prop is called', () => {
    const renderPropMock = jest.fn();
    const firebaseQuery = shallow(
      <FirebaseQuery reference={{}} render={renderPropMock} />
    );

    expect(renderPropMock.mock.calls.length).toEqual(1);
  });

  test('render prop is called with to array', () => {
    const renderPropMock = jest.fn();
    const firebaseQuery = shallow(
      <FirebaseQuery reference={{}} render={renderPropMock} toArray={true} />
    );

    expect(renderPropMock.mock.calls.length).toEqual(1);
  });

  test('render prop is called with to array containing state', () => {
    const renderPropMock = jest.fn();
    const firebaseQuery = shallow(
      <FirebaseQuery reference={{}} render={renderPropMock} toArray={true} />
    );
    firebaseQuery.setState({
      value: {test: 'test'}
    });
    expect(renderPropMock.mock.calls.length).toEqual(2);
  });
});
