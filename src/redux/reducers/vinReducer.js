const vinReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_VIN':
        return {...action.payload};
      default:
        return state;
    }
  };

export default vinReducer;