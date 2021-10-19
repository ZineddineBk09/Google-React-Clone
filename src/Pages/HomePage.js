import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './HomePage.css'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from './Search'
import { Button } from '@material-ui/core'
import { ActionTypes } from '../Glob_Context_API/reducer'
import { useGlobContext } from '../Glob_Context_API/context'
import { useGoogleSearch } from '../useGoogleSearch'
import GoogleApps from '../GoogleApps'

const HomePage = () => {
  const [{}, dispatch] = useGlobContext()
  const [input, setInput] = useState('')
  const [data, setData] = useState()
  //to show all google apps
  const [showApps, setShowApps] = useState(false)

  const history = useHistory(null)

  //dispatch the action:"SET_SEARCH_TERM" to set our search term to the user input
  const handleClick = (e) => {
    e.preventDefault()
    console.log('Enter clicked')
    console.log(input)
    dispatch({
      type: ActionTypes.SET_SEARCH_TERM,
      term: input,
    })
    
    history.push('/search')
    // useGoogleSearch()
  }

  return (
    <div className='homePage'>
      <header className='homePage__header'>
        <div className='homePage__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='homePage__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon
            className='homePage__headerRight__icon'
            onClick={() => {
              console.log('clicked')
              setShowApps(!showApps)
            }}
          />
          <Avatar className='homePage__headerRight__icon' />
        </div>
      </header>
      {/* Showing google apps */}

      {showApps && <GoogleApps />}

      <div className='homePage__body' onClick={() => setShowApps(false)}>
        {/* Google logo */}
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png '
          alt='google'
        />
        <form>
          {/* Search field */}

          <Search setInput={setInput} />
          <div className='homePage__bodyButtons'>
            <Button variant='outlined' type='submit' onClick={handleClick}>
              Google Search
            </Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HomePage
