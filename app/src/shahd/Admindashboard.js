import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import './adminDashboard.css';


function AdminDashboard() {
  const redirectToPage = (page) => {
    window.location.href = `${page}`;
  };

  return (
    <>
    <NavBar/>
    <div className="admin-container">
      <div className="admin-box">
        <div className="admin-actions">
          <h1>Admin Console</h1>
          <hr/>
          <ul>
            <li>
              <button onClick={() => redirectToPage('/organizationList')}>View Organization List</button>
            </li>
            <li>
              <button onClick={() => redirectToPage('/donorList')}>View Donor List</button>
            </li>
            <li>
              <button onClick={() => redirectToPage('/donor_OrgSubmissions')}>Review Donor/Organization Submissions</button>
            </li>
            <li>
              <button onClick={() => redirectToPage('/donor_OrgRequests')}>Manage Donor/Organization Requests</button>
            </li>
            <li>
              <button onClick={() => redirectToPage('')}>Manage Users Account</button>
            </li>
            <li>
              <button onClick={() => redirectToPage('/accountSettings')}>Account Settings</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AdminDashboard;