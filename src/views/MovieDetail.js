import React from 'react'
import './style/MovieDetail.css'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GET_DETAIL_MOVIE } from './actions/actionMovieDetail'

const MovieDetail = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const idMovie = searchParams.get('i')
  const detailMovie = useSelector(state => state.detailMovie)

  useEffect(() => {
    dispatch(GET_DETAIL_MOVIE(idMovie))
  }, [idMovie])

  return (
    <div className='container'>
      {
        detailMovie.isLoading ? (<div>Loading...</div>) :
        detailMovie.isError ? (<div>{detailMovie.errMessage}</div>) :
        (<>
          <div className='display-block'>
            <div className='poster'>
              <img src={detailMovie.detailMovie.Poster}/>
            </div>
            <div className='about'>
              <h1>{detailMovie.detailMovie.Title} ({detailMovie.detailMovie.Year})</h1>
              <div className='product'>
                <p>{detailMovie.detailMovie.Released}</p>
                <p>{detailMovie.detailMovie.Country}</p>
                <p>{detailMovie.detailMovie.Runtime}</p>
                <p>{detailMovie.detailMovie.Rated}</p>
              </div>
              <div className='genres'>
                {
                  detailMovie.detailMovie.Genre
                }
              </div>
            </div>
          </div>
          <div className='detailMovie'>
            <div className='synopsis'>
              <h4>Synopsis</h4>
              <p>{detailMovie.detailMovie.Plot}</p>
            </div>
            <div className='rating'>
              {
                detailMovie.detailMovie.Ratings.map((item, key) => {
                  return (
                    <div key={key}>
                      <hr />
                      <div className='ratings'>
                        <p>{item.Source}</p>
                        <p>{item.Value}</p>
                      </div>
                    </div>
                  )
                })
              }
              <hr />
            </div>
            <div className='moreInformation'>
              <div className='director'>
                <p>Director</p>
                <p className='text-gray'>{detailMovie.detailMovie.Director}</p>
              </div>
              <div className='writer'>
                <p>Writer</p>
                <p className='text-gray'>{detailMovie.detailMovie.Writer}</p>
              </div>
              <div className='actor'>
                <p>Actor</p>
                <p className='text-gray'>{detailMovie.detailMovie.Actors}</p>
              </div>
            </div>
          </div>
        </>)
      }
    </div>
  )
}

export default MovieDetail