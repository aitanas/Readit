import React from "react";
import PropTypes from "prop-types";

const Detail = ({ post }) => {
  const { reviewAuthor, reviewTitle, review, dateTime, bookAuthor, bookTitle, id, votes } = post;
  return(
    <React.Fragment>
      <h1>Review detail</h1>
      <h2>{reviewTitle}</h2>
      <h2>{reviewAuthor}</h2>
      <h3>{bookTitle}</h3>
      <h3>{bookAuthor}</h3>
      <p>{dateTime}</p>
      <p>{review}</p>
    </React.Fragment>
  );
}

Detail.propTypes = {
  post: PropTypes.object
}

export default Detail