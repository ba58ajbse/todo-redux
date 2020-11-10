import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/index';

const TodoList = () => {
    const todos = useSelector(state => {
        return state;
    });
    const dispatch = useDispatch();

    const list = todos.map(todo => {
        return (
            <li
                key={todo.id}
                className={todo.done ? "done" : ""}
            >
                <button
                    type="button"
                    onClick={() => dispatch(toggleTodo(todo.id))}
                >done</button>
                {todo.title}
                <button
                    type="button"
                    onClick={() => dispatch(removeTodo(todo.id))}
                >remove</button>
            </li>
            )
        })

    return (
        <ul>{list}</ul>
    )
}

export default TodoList;