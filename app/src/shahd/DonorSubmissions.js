import React from 'react';
import './donorSubmissions.css';
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function ReviewDonorSubmissions(){
    return (
        <>
        <NavBar/>
        <div className="review-donor-submissions-container">
            <h2>Review Donor Submissions</h2>
            <p>As an admin, you can view and download the information submitted by donor doctors and donor teachers to decide whether to accept or reject their requests. This ensures that qualified volunteers are onboarded, enhancing the quality of services provided through the platform.</p>
            
            {/* Add your review process and donor submissions display here */}
        </div>
        <Footer/>
        </>
    );
}

export default ReviewDonorSubmissions;