import React from 'react'
import '../styles/Footer.css'
import Social from './Social'

function Footer() {
  return (
    <footer className='footer'>
      <Social />
        <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  )
}

export default Footer