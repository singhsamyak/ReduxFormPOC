import {
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  INVALID_EMAIL,
  VALID_FIRST_NAME,
  VALID_LAST_NAME,
  VALID_EMAIL,
  VALID_PASSWORD,
  INVALID_PASSWORD
} from '../actions/types';

const defaultState = {
  firstNameHasError: false,
  lastNameHasError: false,
  emailHasError: false,
  passwordHasError: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case VALID_FIRST_NAME:
      return {
        ...state,
        firstNameHasError: false
      };

    case INVALID_FIRST_NAME:
      return {
        ...state,
        firstNameHasError: true
      };

    case VALID_LAST_NAME:
      return {
        ...state,
        lastNameHasError: false
      };

    case INVALID_LAST_NAME:
      return {
        ...state,
        lastNameHasError: true
      };

    case VALID_EMAIL:
      return {
        ...state,
        emailHasError: false
      };

    case INVALID_EMAIL:
      return {
        ...state,
        emailHasError: true
      };

    case VALID_PASSWORD:
      return {
        ...state,
        passwordHasError: false
      };

    case INVALID_PASSWORD:
      return {
        ...state,
        passwordHasError: true
      };

    default:
      return state;
  }
}
