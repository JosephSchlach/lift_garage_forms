const diagReducer = (state = [], action) => {
  console.log('in diag reducer');
    switch (action.type) {
      case 'SET_DIAG':
        return action.payload;
      default:
        return state;
    }
  };

export default diagReducer;