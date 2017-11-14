import { connect } from 'react-redux';
import Page from '../components/Page';

const mapStateToProps = state => {
  console.log('state', state);
  return {
    notification: state.notification
  };
};

const PageContainer = connect(mapStateToProps)(Page);
export default PageContainer;
