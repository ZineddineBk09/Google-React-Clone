import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'

const Search = ({ setInput }) => {
  const handleChange = (e) => {
    
    setInput(e.target.value)
  }

  return (
    <div className='homePage__bodySearch'>
      <SearchIcon className='homePage__bodySearch__icon' />
      <input
        type='text'
        className='homePage__bodySearch__input'
        onChange={handleChange}
      />
      <MicIcon />
    </div>
  )
}

export default Search
