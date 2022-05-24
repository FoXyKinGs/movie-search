import React from 'react'
import './style/Card.css'

import { useNavigate } from 'react-router-dom'

const Card = ( props ) => {

  const navigate = useNavigate()

  const clickHandle = (id) => {
    navigate(`/movieDetail?i=${id}`)
  }

  return (
    <div className='card'>
      <div className='type'>
        <p>{props.data.Type}</p>
      </div>
      <div className='poster'>
        <img onClick={() => clickHandle(props.data.imdbID)} src={props.data.Poster}/>
        <p className='detail'>Detail</p>
      </div>
      <p className='title' onClick={() => clickHandle(props.data.imdbID)}>{props.data.Title}</p>
      <p className='year'>{props.data.Year}</p>
    </div>
  )
}

export default Card