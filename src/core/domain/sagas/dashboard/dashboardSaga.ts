import {SagaIterator} from 'redux-saga';
import {call, put, takeLatest} from 'redux-saga/effects';
import {User} from '@core/dto';
import DataSource from '../../../data/DataSource';
import {dashboardActionTypes} from '../../actions/dashboard/dashboardActionCreator';
import {ActionStatusType, createActionWithStatus} from '../../actions/utils';

export function* dashboardSaga() {
  yield takeLatest(dashboardActionTypes.getCurrentUser, getCurrentUser);
}

function* getCurrentUser(): SagaIterator {
  try {
    yield put(
      createActionWithStatus(
        dashboardActionTypes.getCurrentUser,
        ActionStatusType.start,
      ),
    );
    const user: User = yield call(DataSource.dashboard.getCurrentUser);
    yield put(
      createActionWithStatus(
        dashboardActionTypes.getCurrentUser,
        ActionStatusType.success,
        user,
      ),
    );
  } catch (e) {
    yield put(
      createActionWithStatus(
        dashboardActionTypes.getCurrentUser,
        ActionStatusType.error,
        e,
      ),
    );
  }
}
