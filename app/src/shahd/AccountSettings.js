import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import "./accountSettings.css"

function AccountSettings() {
  // State to manage form inputs
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (currentPassword === '' || newPassword === '' || confirmNewPassword === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    // Perform password change logic (simulated here)
    alert('Password successfully changed.');
    // Reset form fields
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <>
    <NavBar/>
    <div className='wrapSettings'>
      <div className='boxAccount'>
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputs4'>
          
          <input
            type="password"
            id="currentPassword"
            placeholder='Current Password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
      
          <input
            type="password"
            id="newPassword"
            placeholder='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            id="confirmNewPassword"
            placeholder='Confirm New Password'
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button type="submit">Change Password</button>
        </div>
      </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AccountSettings;