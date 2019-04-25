import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCarSaga(action) {
    console.log('in getCarSaga');
    try{
       const response = yield axios.get('/api/car');
       console.log(response.data)
        yield put({type: 'SET_CAR', payload: response.data});
    }
    catch (error) {
        console.log('ERROR IN GET', error);
        alert(`Sorry! Unable to get vehicle. Try again later.`)
    }
}


function* getSaga() {
    yield takeLatest('GET_CAR', getCarSaga);
}

  export default getSaga;