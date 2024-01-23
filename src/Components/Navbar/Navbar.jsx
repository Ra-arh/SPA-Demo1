import './Navbar.css';
import logo from '../../Assets/Logo.svg';
import logout from '../../Assets/logout.png';
import setting from '../../Assets/cogwheel.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';

export const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
      <div className='nav'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
      </div>
      <ul className='nav-menu' ref={navRef}>
        <li>Home</li>
        <li>Abouts</li>
        <li>Features</li>
        <li>Clients</li>
        <li>Faqs</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li className='nav-logout'>
          <img src={logout} alt="LogOut" />
        </li>
        <li className='nav-setting'>
        <img src={setting} alt="Setting" />
        </li>
        <button className='nav-button nav-closebutton' onClick={showNavBar}>
          <FaTimes/>
        </button>
        </ul>
       <button className='nav-button nav-closebutton' onClick={showNavBar}>
         <FaBars/>  
       </button>
    </div>
  )
}
