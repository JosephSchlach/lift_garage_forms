import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addPrePurchaseSaga(action) {
    console.log('in addPrePurchaseSaga');
    try{
        yield axios.post('/api/prepurchase', action.payload);
        yield put({type: 'GET_PREPURCHASE'});
    }
    catch (error) {
        console.log('ERROR IN POST', error);
        alert(`Sorry! Unable to add PrePurchase. Try again later.`)
    }
}

function* addPre() {
    yield takeLatest('ADD_PREPURCHASE', addPrePurchaseSaga);
  }

  export default addPre;