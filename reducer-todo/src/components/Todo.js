import React from 'react';
import './Todo.css'

const Todo = props => {
  return (
    <div
      className={`${props.item.completed ? 'completed-task' : ""}`}
      onClick={() => dispatch({type: 'TOGGLE_ITEM', payload: props.item.id})}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;