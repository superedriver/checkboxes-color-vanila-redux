import { createStore } from 'redux'
import { todoApp } from './reducers'

const initialState = {
  squareColor: 'black',
  circleColor: 'black',
};

const store = createStore(
  todoApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
