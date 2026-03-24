import React from 'react';
import './Headerstyle.css';
import logo from './main logo copy.png';

const Header = () => {
  const[] = React.useState('')
    return (
        <>
    <div className="header">
      <img
        src={logo}
        alt="Technoplay Logo"
        className="logo"
      />
      <h1 className="title">TECHNOPLAY</h1>
    </div>
    </>
    );
};

export default Header