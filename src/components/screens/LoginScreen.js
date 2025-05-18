import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'

const LoginScreen = () => {

  const [singIn, setSignIN] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen_background'>
        <img src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' alt='Netflix Logo' className='loginScreen_logo' />
        <button onClick={() => setSignIN(true)} className='loginScreen_button'>Sign In</button>
        <div className='loginScreen_gradient'></div>
      </div>

      <div className='loginScreen_body'>
        { singIn ? (<SignInScreen />) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginScreen_input'>
              <form>
                <input type='email' placeholder='Email Address' />
                <button onClick={() => setSignIN(true)} className='loginScreen_getStarted'>GET STARTED<i className='fas fa-arrow-right'></i></button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginScreen