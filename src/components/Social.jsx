import React from 'react'
import "../styles/Social.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Social() {
  return (
    <nav className='nav-social container'>
        <a className='icon' href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a className='icon' href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a className='icon' href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </nav>
  )
}

export default Social