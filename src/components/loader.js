import React from 'react'
import './loader.css'

function Loader() {
  return (
    <div className='spinner-container'>
      <div className='spinner'></div>
      <p className='loading-text'>Loading...</p>
    </div>
  )
}

export default Loader
