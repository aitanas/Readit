import ReviewsList from '../reducers/post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ReviewsList: ReviewsList
})

export default rootReducer