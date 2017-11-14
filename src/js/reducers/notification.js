import { NOTIFY_ERROR, SUBMIT_FORM } from '../actions/types';

const defaultState = {
  message: '',
  notify: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case NOTIFY_ERROR:
      return {
        ...state,
        message: action.message,
        notify: true
      };

    case SUBMIT_FORM:
      return {
        ...state,
        message: '',
        notify: false
      };

    default:
      return state;
  }
}
