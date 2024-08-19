import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/Storecontext.jsx';
import './Profile.css';
import { assets } from '../../assets/assets.js';

const Profile = () => {
  const { token } = useContext(StoreContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://pumatobackend.onrender.com/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserInfo(response.data.user);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (token) {
      fetchUserInfo();
    }
  }, [token]);

  if (!userInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <div className="profile-details">
        <img src={assets.profile_icon} alt="" />
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        
        {/* Add more user info as needed */}
      </div>
    </div>
  );
};

export default Profile;
