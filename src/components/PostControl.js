import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Detail from '../components/Detail';
import List from '../components/List';
import CreatePost from './CreatePost';

const PostControl = () => {

  return(
    <React.Fragment>
      <Detail />
      <List />
      <CreatePost />
    </React.Fragment>

  );

}

// Proptypes!
// Map to props!
// Connect wrapper

export default PostControl;