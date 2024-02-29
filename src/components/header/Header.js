import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="banner">
        <img src="/images/logo.png" alt="Logo MJV" />
      </div>
      <nav>
        <Link to="/sobre">SOBRE</Link>

        <Link to="/ranking">RANKING</Link>
        <Link to="/consulta">CONSULTA</Link>
      </nav>
      <div className='divButton'>
        <Link to="/create-account">
          <button className="create-account-button">CRIAR CONTA</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
