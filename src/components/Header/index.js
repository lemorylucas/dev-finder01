import React from 'react';
import { Link } from 'react-router-dom';

 import { Menu } from './styles';

function Header() {
  return (
    <header>
      <Menu>
        <a href="/" className="logo">DEVFinder</a>
        <Link to="/List">
        <button className="ButtonLink" href="/">
          Entrar
        </button>
        </Link>
      </Menu>
    </header>
  )
}

export default Header;