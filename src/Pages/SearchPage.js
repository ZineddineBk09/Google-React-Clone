import React, { useState } from 'react'
import { useGlobContext } from '../Glob_Context_API/context'
import './SearchPage.css'
import Response from '../response'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import Search from './Search'
import { Link } from 'react-router-dom'
import useGoogleSearch from '../useGoogleSearch'

const SearchPage = () => {
  const {state} = useGlobContext()
  const data=state.data
  // console.log("Data2 from search page :  ",data2);
  return (
    <div className='searchPage'>
      <div className='searchPage__top'>
        <div className='searchPage__top__search'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png '
            alt='google'
          />
          <Search />
        </div>
        <div className='searchPage__top__icons'>
          <div className='searchPage__top__iconsLeft'>
            <Link>
              <SearchIcon /> All
            </Link>
            <Link>
              <DescriptionIcon /> News
            </Link>
            <Link>
              <ImageIcon /> Images
            </Link>
            <Link>
              <LocalOfferIcon /> Shopping
            </Link>
            <Link>
              <RoomIcon /> Maps
            </Link>
            <Link>
              <MoreVertIcon /> More
            </Link>
          </div>
          <div className='searchPage__top__iconsRight'>
            <Link>Setting</Link>
            <Link>Tools</Link>
          </div>
        </div>
      </div>
      <div className='searchPage__body'>
        <p>
          About {data?.searchInformation?.formattedTotalResults} results (
          {data?.searchInformation?.searchTime} seconds) for{' '}
          {data?.queries?.request[0]?.searchTerms}
        </p>
        {data.items.map((item) => {
          return (
            <div className='searchPage__body__article'>
              <Link
                to={item.displayLink}
                className='searchPage__body__articleLink'
              >
                {item.pagemap.cse_image[0].src && (
                  <img src={item.pagemap.cse_image[0].src} />
                )}
                {item.displayLink}
              </Link>
              <Link
                to={item.displayLink}
                className='searchPage__body__articleTitle'
              >
                <h1>{item.title}</h1>
              </Link>
              <p>{item.snippet}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchPage
