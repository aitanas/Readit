import * as c from '../actions/ActionTypes'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case c.SORT_BY_VOTES:
      // copy state
      const newState = {...state}
      
      // generate unordered array of posts
      let postVoteOrder = Object.values(state.postList);

      // sort array descending order (most pop first)
      postVoteOrder.sort((a, b) => b["votes"] - a["votes"]); // [[{},2],[{},1]]
      
      // store that array in copy of state
      newState.voteOrder = postVoteOrder;
      
      // return copy of state
      return newState;
    default:
      return state;
  }
}

export default reducer;