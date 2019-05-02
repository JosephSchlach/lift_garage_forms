const currentJobReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_JOBN':
        return action.payload;
      default:
        return state;
    }
  };

export default currentJobReducer;