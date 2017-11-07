import {
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  VALID_FIRST_NAME,
  VALID_LAST_NAME
} from '../actions/types';

import { nameFieldIsValid } from '../utilities/form-validator';

export const appMiddleware = store => next => action => {
  const result = next(action);

  switch(action.type) {
    case 'UPDATE_FIRST_NAME':
      if (nameFieldIsValid(action.firstName)) {
        store.dispatch({
          type: VALID_FIRST_NAME
        });
      } else {
        store.dispatch({
          type: INVALID_FIRST_NAME
        });
      }
      break;

    case 'UPDATE_LAST_NAME':
      if (nameFieldIsValid(action.lastName)) {
        store.dispatch({
          type: VALID_LAST_NAME
        });
      } else {
        store.dispatch({
          type: INVALID_LAST_NAME
        });
      }
      break;
  }

  return result;
}
