
export const initialState = {
  todoArray: [
    {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}
  ],
};

export function reducer (state, action) {     //takes 2 arguments, state and action. perform whatever action on state and return state. it's a reducer function.
    switch(action.type) {      //acts as an if/else tree, compare variable to different cases it could be
      case 'TOGGLE_ITEM':
        return {
          ...state,
          todoArray: state.todoArray.map(todo => {
            if (todo.id === action.paylaod) {
              return {
                ...todo,
                completed: !todo.completed
              };
            } else {
              return todo;
            }
          })
        };
      case 'ADD_ITEM':
        return {
          ...state, todoArray: [...state.todoArray, {
            id: Date.now(),
            item: action.payload,
            completed: false
          } ]
        };

        case 'CLEAR_COMPLETED':
          return {
            ...state,
            todorray: state.todoArray.filter(todo => {
              return !todo.completed;
            })
          }

        default:
            return state;
    }
}