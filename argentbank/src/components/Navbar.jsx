import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import argentBankLogo from '../assets/argentBankLogo.png'
import { useNavigate } from 'react-router-dom';


function Navbar(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
    return(
        <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" onClick={handleClick}>
        <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </a>
      </div>
    </nav>
    )
}

export default Navbar
