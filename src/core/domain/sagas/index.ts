import {all} from 'redux-saga/effects';
import {dashboardSaga} from './dashboard/dashboardSaga';
import {weeklyLimitSaga} from './dashboard/weeklyLimitSaga';

export default function* rootSaga() {
  yield all([dashboardSaga(), weeklyLimitSaga()]);
}
