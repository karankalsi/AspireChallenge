import {PayloadAction} from '../utils';

export const weeklyLimitActionTypes = {
  updateWeeklyLimit: 'weeklyLimit.updateWeeklyLimit',
};

export interface UpdateWeeklyLimitPayload {
  weeklyLimitAmount: number | null;
}

const weeklyLimitActionCreator = () => ({
  updateWeeklyLimit: (
    payload: UpdateWeeklyLimitPayload,
  ): PayloadAction<UpdateWeeklyLimitPayload> => ({
    type: weeklyLimitActionTypes.updateWeeklyLimit,
    payload,
  }),
});

export default weeklyLimitActionCreator;
