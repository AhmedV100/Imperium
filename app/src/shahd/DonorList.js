import React, { useState, useEffect } from 'react';
import './donorList.css';
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function DonorList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDonor, setSelectedDonor] = useState(null);
    const [donors, setDonors] = useState([
        { id: 1, name: "Donor 1", role: "Volunteer Doctor", details: "Details about Donor 1" },
        { id: 2, name: "Donor 2", role: "Volunteer Teacher", details: "Details about Donor 2" },
        { id: 3, name: "Donor 3", role: "Volunteer Doctor", details: "Details about Donor 3" },
        { id: 4, name: "Donor 4", role: "Volunteer Teacher", details: "Details about Donor 4" },
        { id: 5, name: "Donor 5", role: "Volunteer Teacher", details: "Details about Donor 4" },
        { id: 6, name: "Donor 5", role: "Volunteer Teacher", details: "Details about Donor 4" },
        { id: 7, name: "Donor 5", role: "Volunteer Teacher", details: "Details about Donor 4" },
        { id: 8, name: "Donor 5", role: "Volunteer Teacher", details: "Details about Donor 4" },




        // Add more donors as needed
    ]);

    const filteredDonors = donors.filter(donor =>
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDonorClick = (donor) => {
        setSelectedDonor(donor);
    };

    const handleClosePopup = () => {
        setSelectedDonor(null);
    };

    useEffect(() => {
        setSearchTerm('');
    }, [donors]);

    return (
        <>
            <NavBar />
            <div className="donor-list-container">
                <div className='h1style'><h1> Donor List</h1> </div>
                <div className='hrStyle'><hr /> </div>
                <div className='searchBar'>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search donors..."
                    />
                </div>
                <div className="donor-cards">
                    {filteredDonors.map(donor => (
                        <div
                            key={donor.id}
                            onClick={() => handleDonorClick(donor)}
                            className="donor-card"
                        >
                            <p style={{ color: "white" }}>{donor.name}</p>
                            <p style={{ color: "white" }}>{donor.role}</p>
                        </div>
                    ))}
                </div>

                {selectedDonor && (
                    <div className="popup" onClick={handleClosePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close" onClick={handleClosePopup}>&times;</span>
                            <h3>{selectedDonor.name}</h3>
                            <p>{selectedDonor.role}</p>
                            <p>{selectedDonor.details}</p>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default DonorList