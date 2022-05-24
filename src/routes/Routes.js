import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import App from '../App'
import MovieList from '../views/MovieList'
import MovieDetail from '../views/MovieDetail'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' element={<App />}/>
      <Route path='/movieList' element={<MovieList />} />
      <Route path='/movieDetail' element={<MovieDetail />} />
      <Route path='*' element={<h1>Not Found 404</h1>} />
    </Switch>
  )
}

export default Routes