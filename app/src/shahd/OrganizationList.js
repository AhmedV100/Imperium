import React, { useState } from 'react';
import './organizationList.css';
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function ViewRegisteredOrganizations() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrganization, setSelectedOrganization] = useState(null);

    const organizations = [
        "Organization A - Club",
        "Organization B - Society",
        "Organization C - Club",
        "Organization D - Team",
        // Add more organizations as needed
    ];

    const filteredOrganizations = organizations.filter(org =>
        org.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOrganizationClick = (organization) => {
        setSelectedOrganization(organization);
    };

    const handleClosePopup = () => {
        setSelectedOrganization(null);
    };

    return (
        <>
        <NavBar/>
        <div className="wopper">
            <h1>View Registered Organizations</h1>
            <div className="wrapping">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search organizations..."
                />
            </div>
            <ul>
                {filteredOrganizations.map((organization, index) => (
                    <li
                        key={index}
                        onClick={() => handleOrganizationClick(organization)}
                        className="organization"
                    >
                        {organization}
                    </li>
                ))}
            </ul>

            {selectedOrganization && (
                <div className="organization-popup" onClick={handleClosePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={handleClosePopup}>&times;</span>
                        <h3>Organization Details</h3>
                        <p>{selectedOrganization}</p>
                        {/* Add more details as needed */}
                    </div>
                </div>
            )}
        </div>
        <Footer/>
        </>
    );
}

export default ViewRegisteredOrganizations;