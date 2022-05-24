import axios from 'axios'

export const GET_ALL_LIST_MOVIE = (keyup, page) => {
  return {
    type: 'GET_ALL_LIST_MOVIE',
    payload: new Promise((resolve, reject) => {
      axios.get(`http://www.omdbapi.com/?apikey=7819d7f3&s=${keyup}&page=${page}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
    })
  }
}