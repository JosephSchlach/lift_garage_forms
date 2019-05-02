import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addJobSaga(action) {
    console.log('in addJobSaga', action.payload);
    try{
        //RESPONSE IS RETURNING THE ID OF THE ROW THAT WE POSTED TO
       const response = yield axios.post(`/api/job/`,  action.payload);
       console.log(response.data);
       
yield put({type: "SET_JOBN", payload: response.data})
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