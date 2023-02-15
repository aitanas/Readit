import * as c from "./ActionTypes"

export const addPost = (post) => {
  const { reviewTitle, reviewAuthor, review, bookAuthor, bookTitle, votes, id, dateTime } = post;
  return {
    type: c.ADD_POST,
    reviewTitle: reviewTitle,
    reviewAuthor: reviewAuthor,
    review: review,
    bookTitle: bookTitle,
    bookAuthor: bookAuthor,
    dateTime: dateTime,
    votes: votes,
    id: id
  }
}

export const upvote = (id) => {
  return {
    type: c.UP_VOTE,
    id
  }
}

export const downvote = (id) => {
  return {
    type: c.DOWN_VOTE,
    id
  }
}

export const sortByVote = () => {
  return {
    type: c.SORT_BY_VOTES,
  }
}

