import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const { reviewAuthor, reviewTitle, review, dateTime, bookAuthor, bookTitle } = props;
  return (
    <React.Fragment>
      <h1>Review</h1>
      <h2>{reviewTitle}</h2>
      <h2>{reviewAuthor}</h2>
      <h3>{bookTitle}</h3>
      <h3>{bookAuthor}</h3>
      <p>{dateTime}</p>
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
  review: PropTypes.string.isRequired
}

export default Post;
