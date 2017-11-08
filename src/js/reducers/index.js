import { combineReducers } from 'redux';
import userInfo from './UserInfo';
import createAccount from './CreateAccount';

export default combineReducers({
  createAccount,
  userInfo
});
