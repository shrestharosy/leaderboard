import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createRootReducer from "../reducers";

const history = createBrowserHistory();

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(middlewares)
);

export { history };
export default store;
