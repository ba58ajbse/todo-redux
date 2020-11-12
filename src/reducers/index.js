const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: action.id, title: action.title, done: action.done },
      ];
    case 'REMOVE_TODO':
      const newState = state.filter((todo) => todo.id !== action.id);
      return newState;
    case 'TOGGLE_TODO':
      const toggleState = [...state];
      const todo = toggleState.find((todo) => todo.id === action.id);
      todo.done = !todo.done;
      return toggleState;
    default:
      return state;
  }
};

export default todoReducer;
