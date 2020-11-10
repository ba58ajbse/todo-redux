import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/index';

const Todo = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <li
      key={todo.id}
      className={todo.done ? "done" : ""}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      {todo.title}
      <button
        type="button"
        onClick={() => dispatch(removeTodo(todo.id))}
      >X</button>
    </li>
  )
}
export default Todo;
