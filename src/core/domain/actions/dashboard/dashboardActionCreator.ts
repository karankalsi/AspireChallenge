import {Action} from '../utils';

export const dashboardActionTypes = {
  getCurrentUser: 'dashboard.getCurrentUser',
};
const dashboardActionCreator = () => ({
  getCurrentUser: (): Action => ({type: dashboardActionTypes.getCurrentUser}),
});

export default dashboardActionCreator;
