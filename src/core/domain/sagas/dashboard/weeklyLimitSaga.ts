import {SagaIterator} from 'redux-saga';
import {call, put, takeLatest} from 'redux-saga/effects';
import DataSource from '../../../data/DataSource';
import {
  UpdateWeeklyLimitPayload,
  weeklyLimitActionTypes,
} from '../../actions/dashboard/weeklyLimitActionCreator';
import {
  ActionStatusType,
  createActionWithStatus,
  PayloadAction,
} from '../../actions/utils';

export function* weeklyLimitSaga() {
  yield takeLatest(weeklyLimitActionTypes.updateWeeklyLimit, updateWeeklyLimit);
}

function* updateWeeklyLimit(
  action: PayloadAction<UpdateWeeklyLimitPayload>,
): SagaIterator {
  try {
    yield put(
      createActionWithStatus(
        action.type,
        ActionStatusType.start,
        action.payload,
      ),
    );
    yield call(DataSource.dashboard.updateWeeklyLimit, {
      weeklyLimitAmount: action.payload?.weeklyLimitAmount,
    });
    yield put(
      createActionWithStatus(
        action.type,
        ActionStatusType.success,
        action.payload,
      ),
    );
  } catch (e) {
    yield put(createActionWithStatus(action.type, ActionStatusType.error, e));
  }
}
