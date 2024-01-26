import './Navbar.css';
import logo from '../../Assets/Logo.svg';
import logout from '../../Assets/logout.png';
import setting from '../../Assets/cogwheel.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef, useState } from 'react';

export const Navbar = () => {
  const navRef = useRef();
  const [nav, setNav] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const changeBackground = () => {
    if(window.scrollY >= 10){
      setNav(true);
    } else{
      setNav(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
      <div className={nav ? 'nav active' : 'nav'}>    
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
      </div>
      <ul className='nav-menu' ref={navRef}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Abouts</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Faqs</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
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
