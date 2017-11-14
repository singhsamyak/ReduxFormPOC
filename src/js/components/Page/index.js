import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import CreateAccount from '../../Containers/CreateAccount';

const Page = ({ notification }) => {

  const { notify } = notification;

  return (
    <main>
      { notify ? <Notification {...notification}/> : null }
      <CreateAccount />
    </main>
  );
}

Page.propTypes = {
  createAccount: PropTypes.object,
  notification: PropTypes.object
}

export default Page;
