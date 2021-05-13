// This is Middleware file --> catches the actions in our app and displays to us before passing
// to root reducer.

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // for logging out the states as and when it changes
import { persistStore } from "redux-persist"; // for localstorage and session storage

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
