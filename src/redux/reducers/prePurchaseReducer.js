const prePurchaseReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PREPURCHASE':
        return action.payload;
      default:
        return state;
    }
  };

export default prePurchaseReducer;
