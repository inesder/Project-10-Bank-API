import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { userLogin } from '../features/auth/authActions'
import { useForm } from 'react-hook-form'


function LoginPage(){
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    dispatch(userLogin(data))
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
