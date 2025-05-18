import React, { useState } from 'react'
import SubscriptionScreen from './SubscriptionScreen';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
    const [subscriptions, setSubscriptions] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='plans'>
            {subscriptions ? (<SubscriptionScreen />) : (
                <>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>
                        <p className='fw-semibold my-2 text-center '>
                            STEP 3 OF 4</p>
                        <h2 className='fw-bold text-center'>Choose Your Plan</h2>
                        <p className='fw-bold w-50 mx-5   my-1 py-1 '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg>No commitments, cancel online anytime</p>
                        <p className='fw-bold w-50 mx-5  my-1 py-1  '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg> Everything on Netflix for one low price</p>
                        <p className='fw-bold w-50 mx-5  py-1 '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg> No ads and no extra fees</p>
                        <button className="btn my-2  lh-lg fw-bold fs-3 btn-danger w-100 my-4 py-3" onClick={(e) => { e.preventDefault(); setSubscriptions(true); navigate("/subscriptions") }} type="submit">Next</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Plans