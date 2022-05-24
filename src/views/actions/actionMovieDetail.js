import axios from "axios";

export const GET_DETAIL_MOVIE = (id) => {
  return {
    type: 'GET_DETAIL_MOVIE',
    payload: new Promise((resolve, reject) => {
      axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=7819d7f3`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
    })
  }
}