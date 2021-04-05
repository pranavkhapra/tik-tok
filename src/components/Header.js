import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="logo" />
    </Link>
    <div className="upload-container">
      <div className="section">
        <Link to="/upload">
          <div className="upload" />
        </Link>
        <img
          className="personal"
          src="https://i.imgur.com/rwatmMV.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
);

export default Header;
