import { NOTIFY_ERROR, SUBMIT_FORM } from '../actions/types';

const defaultState = {
  isError: false,
  message: '',
  notify: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case NOTIFY_ERROR:
      return {
        ...state,
        isError: true,
        message: action.message,
        notify: true
      };

    case SUBMIT_FORM:
      return {
        ...state,
        isError: false,
        message: action.message,
        notify: true
      };

    default:
      return state;
  }
}
