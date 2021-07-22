import {combineReducers} from 'redux';
import dashboardRootReducer from './dashboard';

export default combineReducers({
  dashboard: dashboardRootReducer,
});
