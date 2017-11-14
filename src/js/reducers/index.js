import { combineReducers } from 'redux';
import createAccount from './createAccount';
import userInfo from './userInfo';
import notification from './notification';

export default combineReducers({
  createAccount,
  notification,
  userInfo
});
