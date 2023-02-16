import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Detail from '../components/Detail';
import List from '../components/List';
import CreatePost from './CreatePost';
import * as a from './../actions';

class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // this makes eslint happy - no-useless-constructors
    }
  }

  handleAddingNewPost = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
  }

  handleUpvote = (id) => {
    const { dispatch } = this.props;
    const action = a.upvote(id);
    dispatch(action);
  }

  handleDownvote = (id) => {
    const { dispatch } = this.props;
    const action = a.downvote(id);
    dispatch(action);
  }

  sortPosts = () => {
    const { dispatch } = this.props;
    const action = a.sortByVote();
    dispatch(action);
  }
  render() {
    // TODO: route to actual selected ticket
    // const postDetail = this.props.postList["1"]
    // const detail = <Detail post={postDetail}/>
    
    // get const list component
    return(
      <React.Fragment>
        {/* {detail} */}
        <List postList={this.props.postList} voteOrder={this.props.voteOrder} sort={this.sortPosts} onUpvote={this.handleUpvote} onDownvote={this.handleDownvote} />
        <CreatePost onAddNewPost={this.handleAddingNewPost} />
      </React.Fragment>

    );
  }
}

// Map to props!
const mapStateToProps = state => {
  
  return {
    postList: state.postList,
    // ordered-by-votes array containing post objects
    voteOrder: state.voteOrder
  }
}

// Proptypes!
PostControl.propTypes = {
  postList: PropTypes.object,
  voteOrder: PropTypes.array
}

// Connect wrapper
PostControl = connect(mapStateToProps)(PostControl)

export default PostControl;