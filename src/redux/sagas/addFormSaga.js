import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addFormSaga(action) {
    console.log('in addFormSaga');
    try{
        yield axios.post('/api/form', action.payload);
        // yield put({type: 'GET_FORM'});
    }
    catch (error) {
        console.log('ERROR IN POST', error);
        alert(`Sorry! Unable to add item. Try again later.`)
    }
}

function* addForm() {
    yield takeLatest('ADD_FORM', addFormSaga);
  }

  export default addForm;