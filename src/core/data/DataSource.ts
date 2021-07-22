import {ApiClient} from './api/client';
import {aspireApiConfig} from './api/config';
import dashboardApiFactory, {DashboardApi} from './api/dashboard';

const aspireClient: ApiClient = new ApiClient(aspireApiConfig);

export interface DataSource {
  dashboard: DashboardApi;
}

const DataSource: DataSource = {
  dashboard: dashboardApiFactory(aspireClient),
};

export default DataSource;
