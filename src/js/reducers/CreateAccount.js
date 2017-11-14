import {
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  INVALID_EMAIL,
  VALID_FIRST_NAME,
  VALID_LAST_NAME,
  VALID_EMAIL,
  VALID_PASSWORD,
  INVALID_PASSWORD,
  NOTIFY_ERROR
} from '../actions/types';

const defaultState = {
  firstNameError: false,
  lastNameError: false,
  emailError: false,
  passwordError: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case VALID_FIRST_NAME:
      return {
        ...state,
        firstNameError: false
      };

    case INVALID_FIRST_NAME:
      return {
        ...state,
        firstNameError: true
      };

    case VALID_LAST_NAME:
      return {
        ...state,
        lastNameError: false
      };

    case INVALID_LAST_NAME:
      return {
        ...state,
        lastNameError: true
      };

    case VALID_EMAIL:
      return {
        ...state,
        emailError: false
      };

    case INVALID_EMAIL:
      return {
        ...state,
        emailError: true
      };

    case VALID_PASSWORD:
      return {
        ...state,
        passwordError: false
      };

    case INVALID_PASSWORD:
      return {
        ...state,
        passwordError: true
      };

    case NOTIFY_ERROR:
      const {
        firstNameError,
        lastNameError,
        emailError,
        passwordError
      } = action;

      return {
        ...state,
        firstNameError,
        lastNameError,
        emailError,
        passwordError
      };

    default:
      return state;
  }
}
