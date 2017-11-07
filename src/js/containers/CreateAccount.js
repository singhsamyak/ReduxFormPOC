import { connect } from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import {
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_EMAIL
} from '../actions/types';

const mapStateToProps = state => {
  console.log('state', state);
  return {
    userInfo: state.userInfo,
    createAccount: state.createAccount
  };
};

const mapDispatchToProps = dispatch => {
  return {
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

    onFormSubmit: () => {
      dispatch({
        type: SUBMIT_CREATE_ACCOUNT
      });
    }
  }
};

const CreateAccountContainer = connect(mapStateToProps,mapDispatchToProps)(CreateAccount);
export default connect(mapStateToProps)(CreateAccountContainer);
