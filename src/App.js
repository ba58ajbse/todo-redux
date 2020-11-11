import React from 'react';
import './assets/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Form />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
