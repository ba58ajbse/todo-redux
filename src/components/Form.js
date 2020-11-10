import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/index';

const Form = () => {
    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e => {
        e.preventDefault();
        dispatch(addTodo(inputVal));
        setInputVal('');
    });

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
            />
            <button type="submit">ADD</button>
        </form>
    )
}

export default Form;