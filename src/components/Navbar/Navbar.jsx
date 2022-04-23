import React from 'react';
import './Navbar.css';
import { FaShoppingBasket, FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
      <header>
        <nav className='navbar'>
            <div className="navbar__left">
                <h1 className="navbar__left-logo">KARAKY FOOD</h1>
            </div>

            <div className="navbar__right">
                <ul className='navbar__right-info'>
                    <li><FaUserAlt className='navbar__right-icon navbar__right-user'/> Log In</li>
                    <li><FaShoppingBasket className='navbar__right-icon navbar__right-basket'/></li>
                </ul>
            </div>
        </nav>
      </header>
  )
}

export default Navbar