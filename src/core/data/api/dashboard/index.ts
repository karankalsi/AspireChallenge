import {ApiFactory} from '../factory';
import {GetCurrentUserApi, getCurrentUserApiFactory} from './getCurrentUser';
import {
  UpdateWeeklyLimitApi,
  updateWeeklyLimitApiFactory,
} from './updateWeeklyLimit';

export interface DashboardApi {
  getCurrentUser: GetCurrentUserApi;
  updateWeeklyLimit: UpdateWeeklyLimitApi;
}

const dashboardApiFactory: ApiFactory<DashboardApi> = client => ({
  getCurrentUser: getCurrentUserApiFactory(client),
  updateWeeklyLimit: updateWeeklyLimitApiFactory(client),
});

export default dashboardApiFactory;
