import React from 'react';
import {shallow} from 'enzyme';
import FirebaseDownloadURL from './FirebaseDownloadURL';

describe('FirebaseDownloadURL', () => {
  test('render prop is called', () => {
    const renderPropMock = jest.fn();
    shallow(<FirebaseDownloadURL storage={{}} render={renderPropMock} />);

    expect(renderPropMock.mock.calls.length).toEqual(1);
  });
});
