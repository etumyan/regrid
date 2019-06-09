import React from 'react';
import renderer from 'react-test-renderer';

import { HeaderCell } from '../components/Cell';

test('HeaderCell renders correctly', () => {
  const component = renderer.create(
    <HeaderCell id="id"></HeaderCell>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
