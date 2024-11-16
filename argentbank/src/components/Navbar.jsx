import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import argentBankLogo from '../assets/argentBankLogo.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { logout } from '../features/auth/authSlice';
import { userProfile } from '../features/user/userActions';

function Navbar(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken } = useSelector((state) => state.auth)
  const { userInfos } = useSelector((state) => state.user)

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/')
  }

  useEffect(() => {
    dispatch(userProfile());
}, [dispatch]);


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
        {userToken ?(
         <div >  
          <a className='main-nav-item'>
        <FontAwesomeIcon icon={faCircleUser} />
        {userInfos.firstName}
        </a>
        <a className="main-nav-item" onClick={handleSignOut}>
        <FontAwesomeIcon icon={faRightFromBracket} />
          Sign Out
        </a>
        </div>
        ):(
          <a className="main-nav-item" onClick={handleSignIn}>
        <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </a>
        )}
    </nav>
    )
}

export default Navbar
