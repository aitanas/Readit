const reducer = (state = {}, action) => {
  const { reviewAuthor, reviewTitle, review, dateTime, bookAuthor, bookTitle, id, votes } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          reviewAuthor: reviewAuthor,
          reviewTitle: reviewTitle,
          review: review,
          bookAuthor: bookAuthor,
          bookTitle: bookTitle,
          dateTime: dateTime,
          votes: votes,
          id: id
        }
      });
    default:
      return state;
  }
}

export default reducer;