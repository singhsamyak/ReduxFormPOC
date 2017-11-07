import {
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_EMAIL,
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  INVALID_EMAIL,
  VALID_FIRST_NAME,
  VALID_LAST_NAME,
  VALID_EMAIL,
  BLUR_EMAIL
} from '../actions/types';

import { nameIsValid, emailIsValid } from '../utilities/form-validator';

export const appMiddleware = store => next => action => {
  const result = next(action);

  switch(action.type) {
    case UPDATE_FIRST_NAME:
      if (nameIsValid(action.firstName)) {
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
      if (nameIsValid(action.lastName)) {
        store.dispatch({
          type: VALID_LAST_NAME
        });
      } else {
        store.dispatch({
          type: INVALID_LAST_NAME
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

    case UPDATE_EMAIL:
      const email = action.email;
      if (emailIsValid(email) || email.length === 0) {
        store.dispatch({
          type: VALID_EMAIL
        });
      }
      break;
  }

  return result;
}
