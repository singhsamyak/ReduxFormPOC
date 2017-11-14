import { NOTIFY_ERROR, SUBMIT_FORM, VALIDATE_FORM } from '../actions/types';

import {
  nameIsValid,
  emailIsValid,
  passwordIsValid
} from '../utilities/form-validator';

export const validateForm = store => next => action => {
  const result = next(action);

  switch(action.type) {
    case VALIDATE_FORM:
      const { firstName, lastName, email, password } = action;
      const firstNameValid = nameIsValid(firstName, false);
      const lastNameValid = nameIsValid(lastName, false);
      const emailValid = emailIsValid(email);
      const passwordValid = passwordIsValid(password);

      if (firstNameValid && lastNameValid && emailValid && passwordValid) {
        store.dispatch({
          type: SUBMIT_FORM,
          firstName,
          lastName,
          email,
          password
        });
      } else {
        store.dispatch({
          type: NOTIFY_ERROR,
          message: 'You have one or more errors.',
          firstNameHasError: !firstNameValid,
          lastNameHasError: !lastNameValid,
          emailHasError: !emailValid,
          passwordHasError: !passwordValid
        });
      }
  }

  return result;
}
