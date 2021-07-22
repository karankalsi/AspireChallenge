import {Reducer} from 'redux';
import {
  UpdateWeeklyLimitPayload,
  weeklyLimitActionTypes,
} from '../../actions/dashboard/weeklyLimitActionCreator';
import {
  Action,
  ActionStatusType,
  isActionWithStatus,
  PayloadAction,
} from '../../actions/utils';

export interface WeeklyLimitReducerState {
  updateWeeklyLimitLoading: boolean;
  temporaryWeeklyLimit?: number | null;
}

export const weeklyLimitInitialState: WeeklyLimitReducerState = {
  updateWeeklyLimitLoading: false,
};

const weeklyLimitReducer: Reducer<WeeklyLimitReducerState, Action> = (
  state = weeklyLimitInitialState,
  action,
) => {
  if (
    isActionWithStatus(
      action.type,
      weeklyLimitActionTypes.updateWeeklyLimit,
      ActionStatusType.start,
    )
  ) {
    return {
      ...state,
      updateWeeklyLimitLoading: true,
      temporaryWeeklyLimit: (action as PayloadAction<UpdateWeeklyLimitPayload>)
        .payload.weeklyLimitAmount,
    };
  }

  if (
    isActionWithStatus(
      action.type,
      weeklyLimitActionTypes.updateWeeklyLimit,
      ActionStatusType.success,
    )
  ) {
    return {
      ...state,
      updateWeeklyLimitLoading: false,
      temporaryWeeklyLimit: undefined,
    };
  }

  if (
    isActionWithStatus(
      action.type,
      weeklyLimitActionTypes.updateWeeklyLimit,
      ActionStatusType.error,
    )
  ) {
    return {
      ...state,
      updateWeeklyLimitLoading: false,
      temporaryWeeklyLimit: undefined,
    };
  }

  return state;
};

export default weeklyLimitReducer;
