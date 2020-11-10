import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
