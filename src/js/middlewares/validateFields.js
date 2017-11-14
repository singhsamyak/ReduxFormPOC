import {
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  INVALID_EMAIL,
  VALID_FIRST_NAME,
  VALID_LAST_NAME,
  VALID_EMAIL,
  VALID_PASSWORD,
  INVALID_PASSWORD,
  BLUR_EMAIL,
  BLUR_PASSWORD
} from '../actions/types';

import { nameIsValid, emailIsValid, passwordIsValid } from '../utilities/form-validator';

export const validateFields = store => next => action => {
  const result = next(action);
  let firstName, lastName, email, password;

  switch(action.type) {
    case UPDATE_FIRST_NAME:
      firstName = action.firstName;
      if (nameIsValid(firstName, true)) {
        store.dispatch({
          type: VALID_FIRST_NAME
        });
      } else {
        store.dispatch({
          type: INVALID_FIRST_NAME
        });
      }
      break;

    case UPDATE_LAST_NAME:
      lastName = action.lastName
      if (nameIsValid(lastName, true)) {
        store.dispatch({
          type: VALID_LAST_NAME
        });
      } else {
        store.dispatch({
          type: INVALID_LAST_NAME
        });
      }
      break;

    case UPDATE_EMAIL:
      email = action.email;
      if (emailIsValid(email) || email.length === 0) {
        store.dispatch({
          type: VALID_EMAIL
        });
      }
      break;

    case UPDATE_PASSWORD:
      password = action.password;
      if (passwordIsValid(password) || password.length === 0) {
        store.dispatch({
          type: VALID_PASSWORD
        });
      }
      break;

    case BLUR_EMAIL:
      if (emailIsValid(action.email) || action.email.length === 0) {
        store.dispatch({
          type: VALID_EMAIL
        });
      } else {
        store.dispatch({
          type: INVALID_EMAIL
        });
      }
      break;

    case BLUR_PASSWORD:
      password = action.password;
      if (passwordIsValid(password) || password.length === 0) {
        store.dispatch({
          type: VALID_PASSWORD
        });
      } else {
        store.dispatch({
          type: INVALID_PASSWORD
        });
      }
      break;
  }

  return result;
}
