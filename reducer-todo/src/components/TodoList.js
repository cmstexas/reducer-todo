import React, {useReducer} from 'react';
import Todo from './Todo';
import './Todo.css'
import { initialState, initialReducer } from './reducers/reducer';



const TodoList = props => {

const [state, dispatch] = useReducer(initialReducer, initialState);


  return (
    <div className="todo-list">
      {props.tasks.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={() => dispatch({type:'CLEAR_COMPLETED'})}>
        Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;











// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
