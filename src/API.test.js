import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CunsumeAPI from './Components/consumeAPI';
import ConsumeAPI from './Components/consumeAPI';

test(' api', () => {
  const component = renderer.create(
     <ConsumeAPI />
  );

  let tree = component.toJSON;
  expect(tree).toMatchSnapshot();

  // component.getInstance().handleNewTodo();
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});