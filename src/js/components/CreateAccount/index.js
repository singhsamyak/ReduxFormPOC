import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import InputField from '../InputField';
import Link from '../Link';
import Notification from '../Notification';

const CreateAccount = (props) => {
  const {
    firstNameError,
    lastNameError,
    emailError,
    passwordError
  } = props.createAccount;

  const {
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onPasswordChange,
    onEmailBlur,
    onPasswordBlur,
    onFormSubmit
  } = props;

  const {
    firstName,
    lastName,
    email
  } = props.userInfo;

  return (
    <div className="createAccount">
      <h1>Get Started</h1>
      <p>Already have an account? <Link href='#' title='Sign In'/></p>
      <form onSubmit={onFormSubmit}>
        <InputField
          hasError={firstNameError}
          name="firstName"
          onChange={onFirstNameChange}
          placeholder="First Name"
          type="text"
          value={firstName}/>

        <InputField
          hasError={lastNameError}
          name="lastName"
          onChange={onLastNameChange}
          placeholder="Last Name"
          type="text"
          value={lastName}/>

        <InputField
          hasError={emailError}
          name="email"
          onBlur={onEmailBlur}
          onChange={onEmailChange}
          placeholder="Email"
          type="email"
          value={email}/>

        <InputField
          hasError={passwordError}
          name="password"
          onBlur={onPasswordBlur}
          onChange={onPasswordChange}
          placeholder="Password"
          type="password"/>

        <Button isPrimary={true} value="Create Account" />
      </form>
    </div>
  );
}

CreateAccount.propTypes = {
  notification: PropTypes.object,
  onFirstNameChange: PropTypes.func,
  onLastNameChange: PropTypes.func,
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onEmailBlur: PropTypes.func,
  onPasswordBlur: PropTypes.func,
  onFormSubmit: PropTypes.func,
  userInfo: PropTypes.object
}

export default CreateAccount;
