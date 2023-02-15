import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const { reviewAuthor, reviewTitle, review, dateTime, bookAuthor, bookTitle, whenDownvoted, whenUpvoted, votes, id } = props;
  return (
    <React.Fragment>
      <h2>{reviewTitle} - {votes} votes</h2>
      <button onClick={() => whenUpvoted(id)}>Upvote</button> <button onClick={() => whenDownvoted(id)}>Downvote</button>
      <span>Posted by {reviewAuthor} {dateTime}</span>
      <h3>{bookTitle} by {bookAuthor}</h3>
      <p>{review}</p>
    </React.Fragment>
  );
}

Post.propTypes = {
  reviewAuthor: PropTypes.string.isRequired,
  reviewTitle: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  whenDownvoted: PropTypes.func,
  whenUpvoted: PropTypes.func
}

export default Post;
