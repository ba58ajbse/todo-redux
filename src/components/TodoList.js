import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const list = todos.map(todo => <li key={todo.id}>{todo.title}</li>)

    return (
        <ul>{list}</ul>
    )
}

export default TodoList;