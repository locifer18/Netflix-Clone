import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './SignUpScreen.css'
import Plans from './Plans'
const SignUpStep = () => {
    const user = useSelector(selectUser);
    const [plans, setPlans] = useState(false)
    console.log(user);
    return (
        <div>
            {plans ? (<Plans />) : (
                <>
                    <h6 className='fw-semibold '>STEP 2 OF 4</h6>
                    <h2 className='fw-bold '>Account Created</h2>
                    <p className='fw-semibold   '>Use this email to access your Account</p>
                    <span className='mx-4 my-5 text-center fw-bold fs-4' >{user.email}</span>
                    <button className="btn my-5  lh-lg fw-bold fs-3 btn-danger w-100 my-4 py-3" onClick={(e) => { e.preventDefault(); setPlans(true) }} type="submit">Next</button>
                </>
            )}
        </div>
    )
}

export default SignUpStep;