import * as c from '../actions/ActionTypes'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case c.SORT_BY_VOTES:
      // copy state
      // generate array of IDs ordered-by-votes
      // store that array in copy of state
      // return copy of state
      return 
    default:
      return state;
  }
}

export default reducer;