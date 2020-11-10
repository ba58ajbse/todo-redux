import React, { useState } from 'react';

const Form = () => {
    const [inputVal, setInputVal] = useState('');

    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(inputVal);
        setInputVal('');
    });
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit">ADD</button>
        </form>
    )
}

export default Form;