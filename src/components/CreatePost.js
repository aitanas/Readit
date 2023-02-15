import React from "react";
import PropTypes from "prop-types";

const CreatePost = (props) => {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
          name='dateTime'
          placeholder='DateTime' />
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
  formSubmissionHandler: PropTypes.func
};

export default CreatePost