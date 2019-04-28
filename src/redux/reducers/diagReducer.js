const diagReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_DIAG':
        return action.payload;
      default:
        return state;
    }
  };

export default diagReducer;