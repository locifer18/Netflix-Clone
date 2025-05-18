import React, { useState } from 'react';
import './SubscriptionScreen.css';
import { useNavigate } from 'react-router-dom';
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice'
import Navbar from '../Navbar';

const SubscriptionScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState('Basic');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const plans = [
    { download: "1", devicesnum: "1", devices: "TV, computer, mobile phone, tablet", quality: "Good", name: 'Basic', price: '₹199', description: '720p streaming, 1 device' },
    { download: "2", devicesnum: "2", devices: "TV, computer, mobile phone, tablet", quality: "Great", name: 'Standard', price: '₹499', description: '1080p streaming, 2 devices' },
    { download: "6", devicesnum: "4", devices: "TV, computer, mobile phone, tablet", quality: "Best", name: 'Premium', price: '₹649', description: '4K streaming, 4 devices' },
  ];

  const validateCardDetails = () => {
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      setError('Card number must be 16 digits');
      return false;
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setError('Expiry date must be in MM/YY format');
      return false;
    }
    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      setError('CVV must be 3 digits');
      return false;
    }
    if(name.length < 2) {
      setError('Name must be at least 2 characters');
      return false;
    }
    setError('');
    return true;
  };

  const processPayment = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, transactionId: `mock_${Date.now()}` });
      }, 1000);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!validateCardDetails()) return;

    try {
      const paymentResult = await processPayment();
      if (paymentResult.success) {
        // Save transaction to Firestore
        await addDoc(collection(db, `users/${user.uid}/transactions`), {
          plan: selectedPlan,
          amount: plans.find(plan => plan.name === selectedPlan).price,
          transactionId: paymentResult.transactionId,
          timestamp: new Date(),
          cardNumber: cardNumber,
          expiryDate: expiryDate,
          cvv: cvv,
          name:name
        });

        alert('Payment successful! Redirecting to Homescreen...');
        navigate('/');
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="subscriptionScreen">
        <h4>Step 4 of 4</h4>
        <h1>Choose the plan that’s right for you</h1>
        <div className="subscriptionScreen_plans">
          {plans.map((plan) => (
            <div key={plan.name} className={`subscriptionScreen_plan ${selectedPlan === plan.name ? 'selected' : ''}`} onClick={() => setSelectedPlan(plan.name)} >
              <h3 className='text-bold plan_name badge lh-lg'>{plan.name}</h3>
              <p className='text-muted month_price'>Monthly Price</p>
              <p className='price text-bold'>{plan.price}</p>
              <p className='text-muted quality'>Video and sound quality</p>
              <p className='quality_details'>{plan.quality}</p>
              <p className='text-muted quality'>Resolution</p>
              <p className='quality_details'>{plan.description}</p>
              <p className='text-muted quality'>Supported devices</p>
              <p className='quality_details'>{plan.devices}</p>
              <p className='text-muted quality'>Devices your household can watch at the same time</p>
              <p className='quality_details'>{plan.devicesnum}</p>
              <p className='text-muted quality'>Download devices</p>
              <p className='download'>{plan.download}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handlePayment} className="subscriptionScreen_form">
          <h1 className="subscriptionScreen_title">Set up your credit or debit card</h1>
          {error && <p className="subscriptionScreen_error">{error}</p>}
          <input type="text" placeholder="Card Number (16 digits)" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} maxLength="16" />
          <div className='expiry_cvv'>
            <input type="text" placeholder="Expiry Date (MM/YY)" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} maxLength="5" />
            <input type="text" className='cvv' placeholder="CVV (3 digits)" value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength="3" />
          </div>
            <input type="text" placeholder="Name on the card" onChange={(e)=>setName(e.target.value)} value={name} />
          <button type="submit" className="subscriptionScreen_button">
            Start Membership
          </button>
        </form>
      </div>
    </>
  );
};

export default SubscriptionScreen;