import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addCarSaga(action) {
    console.log('in addCarSaga');
    try{
        yield axios.post('/api/car', action.payload);
        // yield put({type: 'GET_CAR'});
    }
    catch (error) {
        console.log('ERROR IN POST', error);
        alert(`Sorry! Unable to add item. Try again later.`)
    }
}

function* addCar() {
    yield takeLatest('ADD_CAR', addCarSaga);
  }

  export default addCar;