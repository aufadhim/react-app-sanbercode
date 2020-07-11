import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Hooks from './Components/pageHooks';

test('hooks click', () => {
  const component = renderer.create(
     <Hooks />
  );

  let tree = component.toJSON;
  expect(tree).toMatchSnapshot();

//   component.getInstance().setCount();
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});
