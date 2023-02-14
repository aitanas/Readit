const reducer = (state = {}, action) => {
  const { reviewAuthor, reviewTitle, review, dateTime, bookAuthor, bookTitle, id, votes } = action;
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;