import {Reducer} from 'redux';
import {User} from '@core/dto';
import {dashboardActionTypes} from '../../actions/dashboard/dashboardActionCreator';
import {
  weeklyLimitActionTypes,
  UpdateWeeklyLimitPayload,
} from '../../actions/dashboard/weeklyLimitActionCreator';
import {
  Action,
  ActionStatusType,
  isActionWithStatus,
  PayloadAction,
} from '../../actions/utils';

export interface DashboardReducerState {
  getCurrentUserLoading: boolean;
  currentUser?: User;
}

export const dashboardReducerInitialState: DashboardReducerState = {
  getCurrentUserLoading: false,
};

const dashboardReducer: Reducer<DashboardReducerState, Action> = (
  state = dashboardReducerInitialState,
  action,
) => {
  if (
    isActionWithStatus(
      action.type,
      dashboardActionTypes.getCurrentUser,
      ActionStatusType.start,
    )
  ) {
    return {
      ...state,
      getCurrentUserLoading: true,
    };
  }

  if (
    isActionWithStatus(
      action.type,
      dashboardActionTypes.getCurrentUser,
      ActionStatusType.success,
    )
  ) {
    return {
      ...state,
      getCurrentUserLoading: false,
      currentUser: (action as PayloadAction<User>).payload,
    };
  }
  if (
    isActionWithStatus(
      action.type,
      dashboardActionTypes.getCurrentUser,
      ActionStatusType.error,
    )
  ) {
    return {
      ...state,
      getCurrentUserLoading: false,
    };
  }

  if (
    isActionWithStatus(
      action.type,
      weeklyLimitActionTypes.updateWeeklyLimit,
      ActionStatusType.success,
    ) &&
    state.currentUser
  ) {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        weeklyLimit: (action as PayloadAction<UpdateWeeklyLimitPayload>).payload
          ?.weeklyLimitAmount,
      },
    };
  }

  return state;
};

export default dashboardReducer;
