import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addCheckout(action) {
    console.log('in addCheckoutSaga');
    try{
        yield axios.post('/api/checkout', action.payload);
        yield put({type: 'GET_CHECKOUT'});
    }
    catch (error) {
        console.log('ERROR IN POST', error);
        alert(`Sorry! Unable to add item. Try again later.`)
    }
}

function* addCheckoutSaga() {
    yield takeLatest('ADD_CHECKOUT', addCheckout);
  }

  export default addCheckoutSaga;