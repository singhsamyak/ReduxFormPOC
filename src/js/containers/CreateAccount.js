import { connect } from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import {
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  BLUR_EMAIL,
  BLUR_PASSWORD,
  VALIDATE_FORM
} from '../actions/types';

const mapStateToProps = state => {
  console.log('state', state);
  return {
    createAccount: state.createAccount,
    notification: state.notification,
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // On Change Handlers
    onFirstNameChange: (event) => {
      dispatch({
        type: UPDATE_FIRST_NAME,
        firstName: event.target.value
      });
    },

    onLastNameChange: (event) => {
      dispatch({
        type: UPDATE_LAST_NAME,
        lastName: event.target.value
      });
    },

    onEmailChange: (event) => {
      dispatch({
        type: UPDATE_EMAIL,
        email: event.target.value
      });
    },

    onPasswordChange: (event) => {
      dispatch({
        type: UPDATE_PASSWORD,
        password: event.target.value
      });
    },

    // On Blur Handlers
    onEmailBlur: (event) => {
      dispatch({
        type: BLUR_EMAIL,
        email: event.target.value
      });
    },

    onPasswordBlur: (event) => {
      dispatch({
        type: BLUR_PASSWORD,
        password: event.target.value
      });
    },

    // On Submit Handlers
    onFormSubmit: (event) => {
      event.preventDefault();
      dispatch({
        type: VALIDATE_FORM,
        firstName: event.target[0].value,
        lastName: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value
      });
    }
  }
};

const CreateAccountContainer = connect(mapStateToProps,mapDispatchToProps)(CreateAccount);
export default connect(mapStateToProps)(CreateAccountContainer);
