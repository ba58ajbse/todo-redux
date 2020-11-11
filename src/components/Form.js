import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/index';

const Form = () => {
    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e => {
        e.preventDefault();
        if(inputVal === '') return;
        dispatch(addTodo(inputVal));
        setInputVal('');
    });

    return (
        <form
            className="form-wrap"
            onSubmit={handleSubmit}
        >
            <button
                type="submit"
                className="add-btn">
            <span className="plus"></span>
            </button>
            <input
                type="text"
                className="add-input"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
            />
        </form>
    )
}

export default Form;