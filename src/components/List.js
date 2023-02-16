import React from "react";
import Post from '../components/Post';
import PropTypes from "prop-types";

function List(props){

  const { voteOrder, sort } = props;
  // OKAY
  // we have the sorted objects
  // we need to run the sort function in order to populate voteOrder
  // do we do it here?
  // do we do it in Control?
  // Next time on Code...
  // THESE are THEIR stories #readit

  return (
    <React.Fragment>
      {voteOrder.map((post) => 
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
  voteOrder: PropTypes.array,
  postList: PropTypes.object,
  sort: PropTypes.func,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
}

export default List;