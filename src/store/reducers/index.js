import { combineReducers } from 'redux'
import searchMovie from './searchMovie'
import detailMovie from './detailMovie'

const rootReducers = combineReducers({
  searchMovie: searchMovie,
  detailMovie: detailMovie
})

export default rootReducers
