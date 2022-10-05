import { createStore } from "redux";
import reducers from './reducers/index'
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { compose } from "redux";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
  const store = createStore(
   reducers, /* preloadedState, */
   {},
   composeEnhancer(applyMiddleware(thunk))
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
 /* eslint-enable */

export default store;