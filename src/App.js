import './App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  const [payload, setPayload] = useState('')

  const handleEvent = (e) => {
    setPayload(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/movieList?s=${payload}&page=${1}`)
  }

  return (
    <div className="container">
      <form onSubmit={e => submitHandler(e)} id='searchBar' data-v-firstSearchBar>
        <input
          id='search'
          type='text'
          value={payload}
          onChange={e => handleEvent(e)}
          placeholder="Search movie by name"
          autoComplete='off'
          data-v-firstSearchBar
        />
        <button type='submit' data-v-firstSearchBar>Search</button>
      </form>
    </div>
  );
}

export default App;
