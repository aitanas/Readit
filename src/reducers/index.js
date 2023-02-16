import postListReducer from '../reducers/post-list-reducer';
import voteOrderReducer from '../reducers/vote-order-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postList: postListReducer,
  voteOrder: voteOrderReducer
})

export default rootReducer