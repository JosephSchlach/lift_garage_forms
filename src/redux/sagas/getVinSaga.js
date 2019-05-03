import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getVinSaga(action) {
    console.log('in getVinSaga', action.payload);
    let vin = action.payload;
    try{
       const response = yield axios.get(`/api/vin/${vin}`);
       console.log(response.data)
        yield put({type: 'SET_VIN', payload: response.data});
    }
    catch (error) {
        console.log('ERROR IN GET', error);
        alert(`Sorry! Unable to get vehicle. Try again later.`)
    }
}


function* getSaga() {
    yield takeLatest('GET_VIN', getVinSaga);
}

  export default getSaga;