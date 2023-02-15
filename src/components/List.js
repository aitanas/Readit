import React from "react";
import Post from '../components/Post';
import PropTypes from "prop-types";

function List(props){
  // order array by IDs
  // for every id in order ["fdskl;fdsa", "fdshjkf", "fdshajk"]
    // add it to new array of Post obj [{}, {}, {}]
  
    // create ordered array HERE
  return (
    <React.Fragment>
      {/* call the ordered array 
      orderedArray.map => */}
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