import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import blogsReducer from './blogsReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  blogs: blogsReducer,
  theme: themeReducer, // Combine themeReducer into the root reducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
