import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import argentBankLogo from '../assets/argentBankLogo.png'

function Navbar(){
    return(
        <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item">
        <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </a>
      </div>
    </nav>
    )
}

export default Navbar
