import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getFormSaga(action) {
    console.log('in getFormSaga');
    try{
       const response = yield axios.get('/api/form');
       console.log(response.data)
        yield put({type: 'SET_FORM', payload: response.data});
    }
    catch (error) {
        console.log('ERROR IN GET', error);
        alert(`Sorry! Unable to get item. Try again later.`)
    }
}




function* getSaga() {
    yield takeLatest('GET_FORM', getFormSaga);
  }
  export default getSaga;