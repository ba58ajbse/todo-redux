import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/index';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      key={todo.id}
      className={todo.done ? 'todo-row done' : 'todo-row'}
      data-testid={`todo-row-${todo.id}`}
    >
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        className="checkbox-done"
        checked={todo.done}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <label htmlFor={`todo-${todo.id}`} data-testid={`todo-check-${todo.id}`}>
        {todo.title}
      </label>
      <button
        type="button"
        className="remove-btn"
        data-testid={`remove-btn-${todo.id}`}
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        <span className="batsu"></span>
      </button>
    </li>
  );
};
export default Todo;

Todo.propTypes = {
  todo: {
    id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool,
  },
};
