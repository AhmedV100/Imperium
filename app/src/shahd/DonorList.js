import React, { useState, useEffect } from 'react';
import './donorList.css';
import NavBar from "../components/NavBarAdmin";
import Footer from "../components/footer";

function DonorList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDonor, setSelectedDonor] = useState(null);
    const [donors, setDonors] = useState([
        { id: 1, name: "Joe allam", role: "Volunteer Doctor", email: "joe@gmail.com", number:"01139495933", address:"123 main street",area:"Nasr City",governate:"Cairo"},
        { id: 2, name: "Ahmed", role: "Volunteer Teacher", email: "Details about Donor 2" },
        { id: 3, name: "Mohamed", role: "Volunteer Doctor", email: "Details about Donor 3" },
        { id: 4, name: "Mostafa", role: "Volunteer Teacher", email: "Details about Donor 4" },
        { id: 5, name: "Abdelrahman", role: "Volunteer Teacher", email: "Details about Donor 4" },
        { id: 6, name: "Shahd", role: "Volunteer Teacher", email: "Details about Donor 4" },
        { id: 7, name: "Rawan", role: "Volunteer Teacher", email: "Details about Donor 4" },
        { id: 8, name: "Donor 5", role: "Volunteer Teacher", email: "Details about Donor 4" },




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
                            <p><b>Role: </b>{selectedDonor.role}</p>
                            <p><b>Email: </b>{selectedDonor.email}</p>
                            <p><b>Number: </b>{selectedDonor.number}</p>
                            <p><b>Address: </b>{selectedDonor.address}</p>
                            <p><b>Area: </b>{selectedDonor.area}</p>
                            <p><b>Governate: </b>{selectedDonor.governate}</p>

                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default DonorList