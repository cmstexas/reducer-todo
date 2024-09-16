import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import { reducer, initialState } from './reducers/reducer';


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  console.log('state', state);

  const addTodo = item => {
    dispatch({ type: "ADD_ITEM", payload: item});
  };

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_ITEM", payload: id })
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED"})
  };

    return (
      <div className="App">
        <TodoList todoArray={state.todoArray} toggleTodo={toggleTodo} />
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
      </div>
    );
}

export default App;





  //OLD CODE

//   //set multiple states 

//   const addState = () => {
//     const [add, setAdd] = useState('');
//   }

//   const toggleState = () => {
//     const [toggle, setToggle] = useState('');
//   }

//   const clearState = () => {
//     const [clear, setClear] = useState('');
//   }

//     //functions

//   const toggleItem = e => {
//   e.preventDefault();
//   dispatch({type: 'TOGGLE-ITEM', payload: toggle})
//   setToggle('')
//   }


//   const addItem = e => {
//     e.preventDefault();
//     dispatch({type: 'ADD_ITEM', payload: add})
//     setAdd('')
//   }

//   const clearCompleted = () => {
//     e.preventDefault();
//     dispatch({type: 'CLEAR_COMPLETED', payload: clear})
//     setClear('')
//   };

//     return (
//       <div>
//         <h1>To Do List</h1>

//         <TodoForm 
//           addItem={addItem} 
//           handleChanges={handleChanges}
//           submitItem={submitItem}
//         />

//         <TodoList
//           tasks={state.tasks}
//           toggleItem={toggleItem}
//           clearCompleted = {clearCompleted}

//         />
          
//       </div>
//     );
//   }


// export default App;





