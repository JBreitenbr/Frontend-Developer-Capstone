import React from 'react'
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        {/*<Link to="/">*/}
          <img src={Logo} alt="Logo" />
        {/* </Link>*/}
      </div>
    </header>
  )
}

export default Header;