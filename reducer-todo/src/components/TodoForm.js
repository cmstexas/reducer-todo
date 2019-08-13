import React, { useState } from 'react';
import App from '../App'
import { initialState, initialReducer } from './reducers/reducer';


const TodoForm = props => {
    const [fstate, setFormState] = useState({
        item: '',
    })
  }

  const [state, dispatch] = useReducer(initialReducer, initialState);

  //set multiple states 

  const addState = () => {
    const [add, setAdd] = useState('');
  }

  

  //functions

  const addItem = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_ITEM', payload: add})
    setAdd('')
  }



    return (
      <form onSubmit={(e) => addItem(e)}>
        <input
          type="text"
          value={add}
          name="item"
          onChange={(e) => setAdd(e.target.value)}
        />
        <input
        type="submit"
        onSubmit={(e) => addItem(e)}
        />
        <button className ="addnew-btn">Add New Task</button>
      </form>
    );
  

export default TodoForm;
