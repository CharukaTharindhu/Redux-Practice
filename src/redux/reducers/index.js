import { combineReducers } from 'redux';
import reducerAllPosts from './reducerAllPosts';
import selectedPostReducer from './reducerSelectedPost';

const rootReducer = combineReducers({
  allPosts: reducerAllPosts,
  selectedPost: selectedPostReducer,
});

export default rootReducer;
