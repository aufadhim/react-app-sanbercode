import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TodoList from './Components/pageTodoList';

test(' list', () => {
  const component = renderer.create(
     <TodoList />
  );

  let tree = component.toJSON;
  expect(tree).toMatchSnapshot();

  // component.getInstance().handleNewTodo();
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
