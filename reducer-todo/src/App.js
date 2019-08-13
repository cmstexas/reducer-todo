import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import { initialState, initialReducer } from './reducers/reducer';


const App = () => {
  const [ state ] = useReducer(initialReducer, initialState);

  //set multiple states 

  const addState = () => {
    const [add, setAdd] = useState('');
  }

  const toggleState = () => {
    const [toggle, setToggle] = useState('');
  }

  const clearState = () => {
    const [clear, setClear] = useState('');
  }

    //functions

  const toggleItem = e => {
  e.preventDefault();
  dispatch({type: 'TOGGLE-ITEM', payload: toggle})
  setToggle('')
  }


  const addItem = e => {
    e.preventDefault();
    dispatch({type: 'ADD_ITEM', payload: add})
    setAdd('')
  }

  const clearCompleted = () => {
    e.preventDefault();
    dispatch({type: 'CLEAR_COMPLETED', payload: clear})
    setClear('')
  };

    return (
      <div>
        <h1>To Do List</h1>

        <TodoForm 
          addItem={addItem} 
          handleChanges={handleChanges}
          submitItem={submitItem}
        />

        <TodoList
          tasks={state.tasks}
          toggleItem={toggleItem}
          clearCompleted = {clearCompleted}

        />
          
      </div>
    );
  }


export default App;





