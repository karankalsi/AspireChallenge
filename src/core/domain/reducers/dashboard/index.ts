import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';
import weeklyLimitReducer from './weeklyLimitReducer';

const dashboardRootReducer = combineReducers({
  base: dashboardReducer,
  weeklyLimit: weeklyLimitReducer,
});

export default dashboardRootReducer;
