import React, { useState } from 'react';
import './donor_OrgRequests.css';
import NavBar from "../components/NavBarAdmin";
import Footer from "../components/footer";

function Submission({ type, name, contact, profession, email,onViewDocuments, onAccept, onReject }) {
    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);
  
    const handleAccept = () => {
        setAccepted(true);
        setRejected(false);
        onAccept();
    };
  
    const handleReject = () => {
        setRejected(true);
        setAccepted(false);
        onReject();
    };


    return (
        <div className="submission" style={{ backgroundColor: accepted ? '#d4edda' : rejected ? '#f8d7da' : 'white' }}>
            <h2>{type} Request</h2>
            <p><strong>Name:</strong> {name}</p>
            {type === "Donor" ? (
                <p><strong>Profession:</strong> {profession}</p>
            ) : (
                <p><strong>Contact:</strong> {contact}</p>
            )}
            <p><strong>Email:</strong> {email}</p>
            <div className="actions">
                {!accepted && !rejected && (
                    <>
                        <button className="accept" onClick={handleAccept}>Accept</button>
                        <button className="reject" onClick={handleReject}>Reject</button>
                    </>
                )}
                {accepted && <span>Accepted</span>}
                {rejected && <span>Rejected</span>}
            </div>
        </div>
    );
}  


function Donor_OrgRequests(){
    return(
        <>
        <NavBar/>

        <div className='wrapRequest'>
            <div className='orgRequests'>
                <h1><u>Review Organization Requests</u></h1>
                <hr/>
                <Submission
                    type="Organization"
                    name="Resala"
                    contact="John Doe"
                    email="john@example.com"
                    onAccept={() => console.log('Organization Accepted')}
                    onReject={() => console.log('Organization Rejected')}
                />
                <Submission
                    type="Organization"
                    name="Orman"
                    contact="Ahmed Doe"
                    email="Ahmed@example.com"
                    onAccept={() => console.log('Organization Accepted')}
                    onReject={() => console.log('Organization Rejected')}
                />
            </div>

            <div className='donorRequests'>
                <h1><u>Review Donor Requests</u></h1>
                <hr/>
                <Submission
                    type="Donor"
                    name="Jane"
                    profession="Doctor"
                    email="jane@example.com"
                    onAccept={() => console.log('Donor Accepted')}
                    onReject={() => console.log('Donor Rejected')}
                />

                <Submission
                    type="Donor"
                    name="Donor XYZ"
                    profession="Engineer"
                    email="jane@example.com"
                    onAccept={() => console.log('Donor Accepted')}
                    onReject={() => console.log('Donor Rejected')}
                />

            </div>
        </div>

        <Footer/>
        </>
    )
}
export default Donor_OrgRequests;