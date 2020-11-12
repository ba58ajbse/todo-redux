import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/index';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className={todo.done ? 'todo-row done' : 'todo-row'}>
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        className="checkbox-done"
        checked={todo.done}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
      <button
        type="button"
        className="remove-btn"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        <span className="batsu"></span>
      </button>
    </li>
  );
};
export default Todo;
