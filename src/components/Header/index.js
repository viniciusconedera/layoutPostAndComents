import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div id="header">
      <h2 className="title">facebook</h2>
      <h2 className="perfil">Meu perfil <FontAwesomeIcon icon={faUserCircle} /></h2>
      
    </div>
  )
}

export default Header;