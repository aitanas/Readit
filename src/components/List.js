import React from "react";
import Post from '../components/Post';
import PropTypes from "prop-types";

function List(props){

  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => 
        <Post
          whenUpvoted = {props.onUpvote}
          whenDownvoted = {props.onDownvote}
          reviewAuthor = {post.reviewAuthor}
          reviewTitle = {post.reviewTitle}
          review = {post.review}
          bookAuthor = {post.bookAuthor}
          bookTitle = {post.bookTitle}
          dateTime = {post.dateTime}
          votes = {post.votes}
          id = {post.id}
          key = {post.id} />
      )}
    </React.Fragment>
  );
}

List.propTypes = {
  postList: PropTypes.object,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
}

export default List;