const initialState = {
  listMovie: [],
  isError: false,
  isLoading: true,
  errMessage: null
}

const searchMovie = (state = initialState, action) => { 
  switch(action.type) {
    case 'GET_ALL_LIST_MOVIE_PENDING':
      return{...state, isLoading: true}
    case 'GET_ALL_LIST_MOVIE_FULFILLED':
      return{...state, isLoading: false, listMovie: action.payload}
    case 'GET_ALL_LIST_MOVIE_REJECTED':
      return{...state, isLoading: false, isError: true, errMessage: 'Error'}
    default:
      return state
  }
}

export default searchMovie