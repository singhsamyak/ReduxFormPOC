import {
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  VALID_FIRST_NAME,
  VALID_LAST_NAME
} from '../actions/types';

const defaultState = {
  firstNameHasError: false,
  lastNameHasError: false,
  emailHasError: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case INVALID_FIRST_NAME:
      return {
        ...state,
        firstNameHasError: true
      };

    case INVALID_LAST_NAME:
      return {
        ...state,
        lastNameHasError: true
      };

    case VALID_FIRST_NAME:
      return {
        ...state,
        firstNameHasError: false
      };

    case VALID_LAST_NAME:
      return {
        ...state,
        lastNameHasError: false
      };

    default:
      return state;
  }
}
