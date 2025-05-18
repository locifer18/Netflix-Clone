import React, { useState, useEffect } from 'react';
import './ProfileScreen.css';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import db from '../../firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  const plans = [
    { name: 'Basic', price: '₹199/month', description: '720p streaming, 1 device' },
    { name: 'Standard', price: '₹499/month', description: '1080p streaming, 2 devices' },
    { name: 'Premium', price: '₹649/month', description: '4K streaming, 4 devices' },
  ];

  useEffect(() => {
    const fetchCurrentPlan = async () => {
      if (!user || !user.uid) return;

      try {
        const transactionsRef = collection(db, `users/${user.uid}/transactions`);
        const q = query(transactionsRef, orderBy('timestamp', 'desc'), limit(1));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const latestTransaction = querySnapshot.docs[0].data();
          setCurrentPlan(latestTransaction.plan);
        } else {
          setCurrentPlan(null); // No transactions found
        }
      } catch (error) {
        console.error('Error fetching current plan:', error);
        setCurrentPlan(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentPlan();
  }, [user]);

  const handleChangePlan = () => {
    navigate('/subscriptions');
  };

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              {loading ? (
                <p>Loading...</p>
              ) : currentPlan ? (
                <div className="profileScreen_currentPlan">
                  <h4>Current Plan: {currentPlan}</h4>
                  <p>{plans.find(plan => plan.name === currentPlan)?.price}</p>
                  <p>{plans.find(plan => plan.name === currentPlan)?.description}</p>
                </div>
              ) : (
                <p>No active plan. Choose a plan to get started!</p>
              )}

              <div className="profileScreen_availablePlans">
                <h4>Available Plans</h4>
                {plans.map((plan) => (
                  <div key={plan.name} className="profileScreen_plan">
                    <h5>{plan.name}</h5>
                    <p>{plan.price}</p>
                    <p>{plan.description}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleChangePlan}
                className="profileScreen_changePlan"
              >
                Get Plan
              </button>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;