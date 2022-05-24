const initialState = {
  detailMovie: [],
  isLoading: true,
  isError: false,
  errMessage: null
}

const detailMovie = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DETAIL_MOVIE_PENDING' :
      return{...state, isLoading: true}
    case 'GET_DETAIL_MOVIE_FULFILLED' :
      return{...state, isLoading: false, detailMovie: action.payload}
    case 'GET_DETAIL_MOVIE_REJECTED' :
      return{...state, isLoading: false, isError: true, errMessage: 'Error'}
    default :
      return state
  }
}

export default detailMovie