import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {CalculatorWeight} from './Components/pageLiftingSU';

test('input calc weight', () => {
  const component = renderer.create(
     <CalculatorWeight />
  );

  let tree = component.toJSON;
  expect(tree).toMatchSnapshot();

//   component.getInstance().handleGramChange();
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});
