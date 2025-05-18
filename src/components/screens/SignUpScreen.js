import React, { useRef, useState } from 'react';
import './SignUpScreen.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import SignUpStep from './SignUpStep';

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signUp, setSignUp] = useState(false);
    const [isSigningOut, setIsSigningOut] = useState(false);

    const register = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                dispatch(login({
                    uid: authUser.user.uid,
                    email: authUser.user.email,
                }));
                setSignUp(true);
            }).catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    alert("Email already in use");
                } else {
                    alert(error.message);
                }
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <>
            <div className='signInScreen'>
                <div className='signUpScreen_background'>
                    <img
                        src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png'
                        alt='Netflix Logo'
                        className='signUpScreen_logo'/>
                    {signUp && !isSigningOut ? (
                        <button
                            onClick={async () => {
                                setIsSigningOut(true);
                                await auth.signOut();
                            }}
                            className='signUpScreen_button'
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button onClick={signIn} className='signUpScreen_button'>
                            Sign In
                        </button>
                    )}
                </div>

                <main className="form-signin signUp_form m-auto">
                    {signUp && !isSigningOut ? (<SignUpStep />) : (
                        <>
                            <h6 className='fw-semibold'>STEP 1 OF 4</h6>
                            <form>
                                <h1 className="h3 mb-3 text-wrap fs-4 fw-bold">
                                    Create a password to start your membership
                                </h1>
                                <h6 className="h5 mb-3">
                                    Just a few more steps and you're done! We hate paperwork, too.
                                </h6>
                                <div className="form-floating my-2">
                                    <input ref={emailRef} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input ref={passwordRef} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <button className="btn lh-lg fw-bold fs-3 btn-danger w-100 my-4 py-3" onClick={(e) => { e.preventDefault(); register(e); }} type="submit" >
                                    Next
                                </button>
                            </form>
                        </>
                    )}
                </main>
            </div>
        </>
    );
};

export default SignUpScreen;