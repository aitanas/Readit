import React from "react";
import Post from '../components/Post';
import PropTypes from "prop-types";

function List(props){
  // const { reviewAuthor, reviewTitle, review, dateTime, bookAuthor, bookTitle, id, votes } = props;

  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => 
        <Post
          reviewAuthor = {post.reviewAuthor}
          reviewTitle = {post.reviewTitle}
          review = {post.review}
          bookAuthor = {post.bookAuthor}
          bookTitle = {post.bookTitle}
          date = {post.date}
          votes = {post.votes}
          id = {post.id}
          key = {post.id} />
      )}
    </React.Fragment>
  );
}

List.propTypes = {
  postList: PropTypes.object
}

export default List;