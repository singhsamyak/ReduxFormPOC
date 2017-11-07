import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Button from '../Button';
import Link from '../Link';

const CreateAccount = (props) => {
  const {
    firstName: prefilledFirstName,
    lastName: prefilledLastName,
    email: prefilledEmail
  } = props.userInfo;

  const {
    firstNameHasError: firstNameErrorState,
    lastNameHasError: lastNameErrorState,
    emailHasError: emailErrorState
  } = props.createAccount;

  return (
    <div className="createAccount">
      <h1>Get Started</h1>
      <p>
        Already have an account? <Link href='#' title='Sign In'/>
      </p>

      <form>
        <InputField
          hasError={firstNameErrorState}
          onChange={props.onFirstNameChange}
          value={prefilledFirstName}
          name="firstName"
          placeholder="First Name"
          type="text" />

        <InputField
          hasError={lastNameErrorState}
          onChange={props.onLastNameChange}
          value={prefilledLastName}
          name="lastName"
          placeholder="Last Name"
          type="text" />

        <InputField
          hasError={emailErrorState}
          onChange={props.onEmailChange}
          onBlur={props.onEmailBlur}
          value={prefilledEmail}
          name="email"
          placeholder="Email"
          type="email" />

        <InputField
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
