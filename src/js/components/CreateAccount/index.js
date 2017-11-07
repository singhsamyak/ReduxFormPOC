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
    firstNameHasError: firstNameErrorStatus,
    lastNameHasError: lastNameErrorStatus
  } = props.createAccount;

  return (
    <div className="createAccount">
      <h1>Get Started</h1>
      <p>
        Already have an account? <Link href='#' title='Sign In'/>
      </p>

      <form>
        <InputField
          hasError={firstNameErrorStatus}
          onChange={props.onFirstNameChange}
          value={prefilledFirstName}
          name="firstName"
          placeholder="First Name"
          type="text" />

        <InputField
          hasError={lastNameErrorStatus}
          onChange={props.onLastNameChange}
          value={prefilledLastName}
          name="lastName"
          placeholder="Last Name"
          type="text" />

        <InputField
          onChange={props.onEmailChange}
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

CreateAccount.PropTypes = {
  userInfo: PropTypes.object
}

export default CreateAccount;
