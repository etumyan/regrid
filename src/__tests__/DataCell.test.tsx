import React from 'react';
import renderer from 'react-test-renderer';

import { DataCell } from '../components/Cell';

test('DataCell renders correctly', () => {
  const component = renderer.create(
    <DataCell id="id"></DataCell>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
