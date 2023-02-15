import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';

const CreatePost = (props) => {
  // TODO: add internal onSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = formatDistanceToNow(new Date(), {addSuffix: true});

    const newPost = {
      reviewAuthor: e.target.reviewAuthor.value,
      reviewTitle: e.target.reviewTitle.value,
      bookTitle: e.target.bookTitle.value,
      bookAuthor: e.target.bookAuthor.value,
      dateTime: date,
      review: e.target.review.value,
      id: v4()
    }

    props.onAddNewPost(newPost)
  }

  return(
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='reviewAuthor'
          placeholder='Name' />
        <input
          type='text'
          name='reviewTitle'
          placeholder='Review Title' />
        <input
          type='text'
          name='review'
          placeholder='Post content' />
        <input
          type='text'
          name='bookTitle'
          placeholder='Book Title' />
        <input
          type='text'
          name='bookAuthor'
          placeholder='Book Author' />
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
}

CreatePost.propTypes = {
  onAddNewPost: PropTypes.func
};

export default CreatePost