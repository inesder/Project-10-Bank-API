import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function LoginPage(){  
  
  const { userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (userToken) {
      navigate('/profile');
    }
  }, [userToken, navigate]);

  const submitForm =  (data) => {
    const result =  dispatch(userLogin(data))
  }

  return (
<main className="main bg-dark">
<section className="sign-in-content">
<FontAwesomeIcon icon={faCircleUser} />
  <h1>Sign In</h1>
  <form onSubmit={handleSubmit(submitForm)}>
    <div className="input-wrapper">
      <label htmlFor="username">Username </label>
      <input type="text" id="username" {...register('email')} required />
    </div>
    <div className="input-wrapper">
      <label htmlFor="password">Password </label><input type="password" id="password" {...register('password')}
          required />
    </div>
    <div className="input-remember">
      <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
        >Remember me </label>
    </div>

     <button type='submit' className="sign-in-button">Sign In</button> 
  </form>
</section>
</main>
)
}

export default LoginPage
