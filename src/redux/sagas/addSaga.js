import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItemSaga(action) {
    console.log('in addItemSaga');
    try{
        yield axios.post('/api/form', action.payload);
        yield put({type: 'GET_ITEM'});
    }
    catch (error) {
        console.log('ERROR IN POST', error);
        alert(`Sorry! Unable to add item. Try again later.`)
    }
}

function* addSaga() {
    yield takeLatest('ADD_ITEM', addItemSaga);
  }

  export default addSaga;