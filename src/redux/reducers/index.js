import { combineReducers } from 'redux';
import car from './carReducer';
import checkout from './checkoutReducer';
import diag from './diagReducer';
import errors from './errorsReducer';
import formReducer from './formReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  car,
  checkout,
  diag,
  errors, // contains registrationMessage and loginMessage
  formReducer,
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
