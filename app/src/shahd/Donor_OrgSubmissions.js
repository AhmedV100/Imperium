import React, { useState } from 'react';
import './donor_OrgSubmissions.css';
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function Submission({ type, name, contact, profession, email, documents, onViewDocuments, onAccept, onReject }) {
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

    const handleDocumentDownload = () => {
        window.open('/GUC_436_62_43867_2024-04-22T13_04_18.pdf', '_blank');
    };

    return (
        <div className="submission" style={{ backgroundColor: accepted ? '#d4edda' : rejected ? '#f8d7da' : 'white' }}>
            <h2>{type} Submission</h2>
            <p><strong>Name:</strong> {name}</p>
            {type === "Donor" ? (
                <p><strong>Profession:</strong> {profession}</p>
            ) : (
                <p><strong>Contact:</strong> {contact}</p>
            )}
            <p><strong>Email:</strong> {email}</p>
            {documents && (
                <p>
                    <strong>Documents:</strong>{' '}
                    <button onClick={() => handleDocumentDownload(documents)}>View Documents</button>
                </p>
            )}
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

function Donor_OrgSubmissions(){
    return (
        <>
            <NavBar/>
            <div className='wrapSubmit'>
                <div className='orgSubmission'>
                    <h1><u>Review Organization Submissions</u></h1>
                    <hr/>
                    <Submission
                        type="Organization"
                        name="Resala"
                        contact="John Doe"
                        email="john@example.com"
                        documents="/GUC_436_62_43867_2024-04-22T13_04_18.pdf"
                        onAccept={() => console.log('Organization Accepted')}
                        onReject={() => console.log('Organization Rejected')}
                    />
                    <Submission
                        type="Organization"
                        name="Orman"
                        contact="Ahmed Doe"
                        email="Ahmed@example.com"
                        documents="/GUC_436_62_43867_2024-04-22T13_04_18.pdf"
                        onAccept={() => console.log('Organization Accepted')}
                        onReject={() => console.log('Organization Rejected')}
                    />
                </div>

                <div className='donorSubmission'>
                    <h1><u>Review Donor Submissions</u></h1>
                    <hr/>
                    <Submission
                        type="Donor"
                        name="Jane"
                        profession="Doctor"
                        email="jane@example.com"
                        documents="/GUC_436_62_43867_2024-04-22T13_04_18.pdf"
                        onAccept={() => console.log('Donor Accepted')}
                        onReject={() => console.log('Donor Rejected')}
                    />

                    <Submission
                        type="Donor"
                        name="Donor XYZ"
                        profession="Engineer"
                        email="jane@example.com"
                        documents="/GUC_436_62_43867_2024-04-22T13_04_18.pdf"
                        onAccept={() => console.log('Donor Accepted')}
                        onReject={() => console.log('Donor Rejected')}
                    />

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Donor_OrgSubmissions;