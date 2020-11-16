import { func } from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Editor from '../components/editor';
import { initSaga } from '../components/Notes/Sagas/saga-init';

const mapDispatchToProps = {
  initSaga,
};
const Home = ({ initSaga }) => {
  useEffect(() => {
    initSaga();
  });
  return <Editor />;
};

Home.propTypes = {
  initSaga: func,
};
export default connect(null, mapDispatchToProps)(Home);
