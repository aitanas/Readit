import * as c from '../actions/ActionTypes'

const reducer = (state = {}, action) => {
  const { reviewAuthor, reviewTitle, review, dateTime, bookAuthor, bookTitle, id, votes } = action;
  switch (action.type) {
    case c.ADD_POST:
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
    case c.UP_VOTE:
      let newState = {...state}
      const newVotes =  newState[action.id]["votes"] + 1
      newState[action.id]["votes"] = newVotes
      return newState;
    case c.DOWN_VOTE:
      let stateCopy = {...state}
      const decrementedVotes = state[action.id]["votes"] - 1
      stateCopy[action.id]["votes"] = decrementedVotes
      return stateCopy;
    default:
      return state;
  }
}

export default reducer;