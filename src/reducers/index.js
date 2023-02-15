import postListReducer from '../reducers/post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postList: postListReducer
})

export default rootReducer