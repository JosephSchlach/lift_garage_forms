const formReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FORM':
        return action.payload;
      default:
        return state;
    }
  };

export default formReducer;
