import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import reduxPromise from 'redux-promise-middleware'

const middleware = applyMiddleware(
  reduxPromise
)

const store = createStore( rootReducers, middleware )

export default store