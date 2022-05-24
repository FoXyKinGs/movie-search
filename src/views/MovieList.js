import React from 'react'
import './style/MovieList.css'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_LIST_MOVIE } from './actions/actionMovieList'
import ReactPaginate from 'react-paginate'

const MovieList = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [searchParams] = useSearchParams()
  const payload = searchParams.get('s')
  const page = searchParams.get('page')
  const listMovie = useSelector(state => state.searchMovie)
  const [totalPage, setTotalpage] = useState(0)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const changeList = (e) => {
    e.preventDefault()
    navigate(`/movieList?s=${search}&page=${1}`)
    setSearch('')
  }

  const handlePageClick = (e) => {
    navigate(`/movieList?s=${payload}&page=${e.selected + 1}`)
  }

  useEffect(() => {
    dispatch(GET_ALL_LIST_MOVIE(payload, page))
  }, [payload, page])

  useEffect(() => {
    setTotalpage(Math.ceil(listMovie.listMovie.totalResults / 10))
  }, [listMovie])

  return (
    <div className='container'>
      <div data-v-movieListSearchBar>
        <form onSubmit={e => changeList(e)} id='searchBar' data-v-movieListSearchBar>
          <input id='search' value={search} onChange={e => handleChange(e)} type='text' placeholder='Search movie by name' data-v-movieListSearchBar/>
        </form>
      </div>
      {
        listMovie.listMovie.Search ? (
          <>
            <div id='movieList'>
              <h2>LISTS</h2>
              <div className='pagination'>
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={totalPage}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                  forcePage={Number(page - 1)}/>
                </div>
              <div className='lists'>
                {
                  listMovie.isLoading ? (<div>Loading...</div>) :
                  listMovie.isError ? (<div>{listMovie.errMessage}</div>) :
                  listMovie.listMovie.Search.map((item, key) => {
                    return (
                      <div className='coloumn' key={key}>
                        <Card data={item} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </>
        ) : (
          <div id='noMovieAvailable'>
            <p>Sorry we cannot found movie that you search</p>
          </div> 
        )
      }
    </div>
  )
}

export default MovieList