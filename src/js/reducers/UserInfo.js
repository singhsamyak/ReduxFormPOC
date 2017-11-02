import {
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_EMAIL,
  PREFILL_USER_INFO
} from '../actions/types';

const initialUserInfo = {
  firstName : '',
  lastName  : '',
  email : ''
};

export default function (state = initialUserInfo, action) {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName
      };

    case UPDATE_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName
      };

    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email
      };

    case PREFILL_USER_INFO:
      return action.userInfo;

    default:
      return state;
  }
}
