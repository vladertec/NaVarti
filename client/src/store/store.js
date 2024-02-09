import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

export const reducer = combineReducers({
  news: [],
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), devTools)
)

export default store
