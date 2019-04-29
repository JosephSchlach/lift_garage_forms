import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addJobSaga(action) {
    console.log('in addJobSaga', action.payload);
    try{
        const response = yield axios.post(`/api/job/`, {vinId: action.payload});

    }
    catch (error) {
        console.log('ERROR IN POST', error);
        alert(`Sorry! Unable to add job. Try again later.`)
    }
}

function* addJob() {
    yield takeLatest('ADD_JOB', addJobSaga);
  }

  export default addJob;