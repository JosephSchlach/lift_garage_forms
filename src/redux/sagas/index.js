import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import addFormSaga from './addFormSaga';
import addCheckoutSaga from './addCheckoutSaga';
import addPrePurchaseSaga from './addPrePurchaseSaga';
import addDiagSaga from './addDiagSaga';
import addVinSaga from './getVinSaga';
import getSaga from './getSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    addFormSaga(),
    addPrePurchaseSaga(),
    addDiagSaga(),
    addCheckoutSaga(),
    addVinSaga(),
    getSaga(),
  ]);
}
