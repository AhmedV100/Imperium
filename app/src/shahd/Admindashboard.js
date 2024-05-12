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
              <button onClick={() => redirectToPage('/organizationSubmissions')}>Review Organization Submissions</button>
            </li>
            <li>
              <button onClick={() => redirectToPage('/donorSubmissions')}>Review Donor Submissions</button>
            </li>
            <li>
              <button onClick={() => redirectToPage('/organizationRequests')}>Manage Organization Requests</button>
            </li>
            <li>
              <button onClick={() => redirectToPage('/donorRequests')}>Manage Donor Requests</button>
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