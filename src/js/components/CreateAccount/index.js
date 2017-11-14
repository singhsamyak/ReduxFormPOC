import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Button from '../Button';
import Link from '../Link';
import Notification from '../Notification';

const CreateAccount = (props) => {
  const {
    firstName: prefilledFirstName,
    lastName: prefilledLastName,
    email: prefilledEmail
  } = props.userInfo;

  const {
    firstNameHasError: firstNameErrorState,
    lastNameHasError: lastNameErrorState,
    emailHasError: emailErrorState,
    passwordHasError: passwordErrorState
  } = props.createAccount;

  const {
    message,
    notify
  } = props.notification;

  const {
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onPasswordChange,
    onEmailBlur,
    onPasswordBlur,
    onFormSubmit
  } = props;

  return (
    <div className="createAccount">
      { notify ? <Notification message={message}/> : null }
      <h1>Get Started</h1>
      <p>
        Already have an account? <Link href='#' title='Sign In'/>
      </p>

      <form onSubmit={onFormSubmit}>
        <InputField
          hasError={firstNameErrorState}
          onChange={onFirstNameChange}
          value={prefilledFirstName}
          name="firstName"
          placeholder="First Name"
          type="text" />

        <InputField
          hasError={lastNameErrorState}
          onChange={onLastNameChange}
          value={prefilledLastName}
          name="lastName"
          placeholder="Last Name"
          type="text" />

        <InputField
          hasError={emailErrorState}
          onBlur={onEmailBlur}
          onChange={onEmailChange}
          value={prefilledEmail}
          name="email"
          placeholder="Email"
          type="email" />

        <InputField
          hasError={passwordErrorState}
          onBlur={onPasswordBlur}
          onChange={onPasswordChange}
          name="password"
          placeholder="Password"
          type="password" />

        <Button
          isPrimary={true}
          value="Create Account" />
      </form>
    </div>
  );
}

CreateAccount.propTypes = {
  userInfo: PropTypes.object
}

export default CreateAccount;
