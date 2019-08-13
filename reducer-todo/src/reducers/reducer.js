
export const initialState = {

  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
};

export const initialReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_ITEM':
        return {
          ...state,
          editing: !state.editing
        };
      case 'ADD_ITEM':
          const newItem = {
              id: Date.now(),
              item: action.payload,
              editing: !state.editing,
              completed: false
          }
        return {
          ...state, newItem
        };

        case 'CLEAR_COMPLETED':
            const clearItem = state.filter(item => !item.completed)
            return [...clearItem]

        case 'TOGGLE_ITEM':
                const toggleItem = state.map(item => {
                if(item.id === payload)
                    return {...item, completed: !item.completed}
                return item
                })
                return [...toggleItem]
        default:
            return state;
    }
}