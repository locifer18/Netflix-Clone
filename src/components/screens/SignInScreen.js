import React, { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './SignInScreen.css';

const SignInScreen = (props) => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    navigate('/signUp');
  };

  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        navigate('/'); // Redirect to HomeScreen
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email Address' autoComplete="off" required />
        <input ref={passwordRef} type='password' placeholder='Password' autoComplete="off"required />
        <button type='submit' onClick={signIn} className='signInScreen_button'>Sign In</button>
        <h4>
          <span className='signUpScreen_gray'>New to Netflix?</span>
          <span className='signUpScreen_link' onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;