import './Navbar.css';
import logo from '../../Assets/Logo.svg'
import logout from '../../Assets/logout.png'
import setting from '../../Assets/cogwheel.png'


export const Navbar = () => {
  return (
    <div className='nav'>
      {/* <div className='nav-logo'>Logo</div> */}
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
      </div>
      <ul className='nav-menu'>
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
      </ul>
    </div>
  )
}
