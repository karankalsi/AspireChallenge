import endpoints from '../endpoints';
import {ApiFactory} from '../factory';

export interface UpdateWeeklyLimitApiParams {
  weeklyLimitAmount: number | null;
}

export type UpdateWeeklyLimitApi = (
  params: UpdateWeeklyLimitApiParams,
) => Promise<void>;

export const updateWeeklyLimitApiFactory: ApiFactory<UpdateWeeklyLimitApi> =
  client => async params => {
    const res = client.withEndpoint(endpoints.updateWeeklyLimit).patch(params);
    return res.json();
  };
