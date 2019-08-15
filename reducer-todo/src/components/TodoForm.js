import React, {useState} from 'react';

const TodoForm = ({ addTodo, clearCompleted }) => {   //to do form can remain dumb and use useState; it just needs the prop "addTodo"
  const [item, setItem] = useState("");

  const handleChange = event => setItem(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(item);
    setItem("");
  }
  const handleClear = event => {
    event.preventDefault();
    clearCompleted();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="item" 
             placeholder="todo" 
             value={item}
             onChange={handleChange} />
      <button type="submit">Add Todo</button>
      <button onClick={handleClear}>Clear Completed</button>
    </form>
  )
};

export default TodoForm;









// OLD CODE


// import React, { useState } from 'react';
// import App from '../App'
// import { initialState, reducer } from './reducers/reducer';


// const TodoForm = props => {
//     const [fstate, setFormState] = useState({
//         item: '',
//     })
//   }

//   const [state, dispatch] = useReducer(initialReducer, initialState);

//   //set multiple states 

//   const addState = () => {
//     const [add, setAdd] = useState('');
//   }

  

//   //functions

//   const addItem = (e) => {
//     e.preventDefault();
//     dispatch({type: 'ADD_ITEM', payload: add})
//     setAdd('')
//   }



//     return (
//       <form onSubmit={(e) => addItem(e)}>
//         <input
//           type="text"
//           value={add}
//           name="item"
//           onChange={(e) => setAdd(e.target.value)}
//         />
//         <input
//         type="submit"
//         onSubmit={(e) => addItem(e)}
//         />
//         <button className ="addnew-btn">Add New Task</button>
//       </form>
//     );
  

// export default TodoForm;
