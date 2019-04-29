import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addDiag(action) {
    console.log('in addDiagSaga');
    try{
        yield axios.post('/api/diag', action.payload);
        yield put({type: 'GET_DIAG'});
    }
    catch (error) {
        console.log('ERROR IN POST', error);
        alert(`Sorry! Unable to add diag. Try again later.`)
    }
}

function* addDiagSaga() {
    yield takeLatest('ADD_DIAG', addDiag);
  }

  export default addDiagSaga;