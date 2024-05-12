import React, { useState } from 'react';
import './organizationList.css';
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function ViewRegisteredOrganizations() {

    const hardcodedfornowandpray =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12789.622999652575!2d-74.0000000010245!3d40.00000000293648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzU1LjEiTiA3NMKwMTknMDkuNyJX!5e0!3m2!1sen!2sus!4v1630419451337!5m2!1sen!2sus";
    
    const renderLocationComponent = (google_maps_marker) => {
        return (
          <div>
            <iframe
              title="Google Maps Marker"
              src={google_maps_marker}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        );
      };

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrganization, setSelectedOrganization] = useState(null);
    const [organizations, setOrganizations] = useState([
        { id: 1, name: "Resala",Cname:"Ahmed" ,type: "Charity", location: "Location A",area:"Maadi",governate:"Cairo",email:"resala@gmail.com",number:"01547606669",address:"123 main street" },
        { id: 2, name: "Omran",Cname:"Mohamed" , type: "Charity", location: "Location B",area:"6th October",governate:"Alexandria" ,email:"Omran@gmail.com",number:"01257006669",address:"823 main street" },
        { id: 3, name: "Masr Elkheir",Cname:"Alaa" , type: "Club", location: "Location C",area:"Nasr City",governate:"Alexandria" ,email:"MasrElkheir@gmail.com",number:"01147006669",address:"553 main street" },
        { id: 5, name: "Elsherbiny Shelter",Cname:"Mostafa" , type: "Shelter", location: "Location D",area:"Nasr City",governate:"Alexandria" ,email:"sherbiny@gmail.com",number:"01147008089",address:"443 main street" },
        { id: 6, name: "Red Cross",Cname:"Shahd" , type: "Hospital", location: "Location E",area:"6th October",governate:"Giza" ,email:"Red ross@gmail.com",number:"01147586229",address:"133 main street" },
        { id: 7, name: "Uplift Spirit",Cname:"Rawan" , type: "Orphanage", location: "Location F",area:"Nasr City",governate:"Cairo" ,email:"UpliftSpirit@gmail.com",number:"01147006669",address:"763 main street"},
        { id: 8, name: "Organization D",Cname:"Farah" , type: "Team", location: "Location G",area:"Nasr City",governate:"Cairo" ,email:"farah@gmail.com",number:"01058006669",address:"192 main street"},
        { id: 9, name: "Manchester",Cname:"Mahmoud" , type: "Team", location: "Location H",area:"Maadi",governate:"Giza" ,email:"Manchester@gmail.com",number:"01147004449",address:"243 main street"},
        { id: 10, name: "Zelal",Cname:"Abdelrahman" , type: "Team", location: "Location I",area:"Nasr City",governate:"Cairo" ,email:"zelal@gmail.com",number:"01125667879",address:"529 main street"}
        // Add more organizations as needed
    ]);

    const filteredOrganizations = organizations.filter(org =>
        org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.location.toLowerCase().includes(searchTerm.toLowerCase())||
        org.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.governate.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOrganizationClick = (organization) => {
        setSelectedOrganization(organization);
    };

    const handleClosePopup = () => {
        setSelectedOrganization(null);
    };

    return (
        <>
            <NavBar />
            <div className="wopper">
                <div className='h1style'><h1> Organization List</h1> </div>
                <div className='hrStyle'><hr /> </div>
                <div className='wrapping'>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search organizations..."
                    />
                </div>
                <ul className="organization-cards">
                    {filteredOrganizations.map(organization => (
                        <li
                            key={organization.id}
                            onClick={() => handleOrganizationClick(organization)}
                            className="organization-card"
                        >
                            <p><b>{organization.name}</b></p>
                            <p><b>Type: </b>{organization.type}</p>
                            <p><b>Area: </b>{organization.area}</p>
                            <p><b>Governate: </b>{organization.governate}</p>

                        </li>
                    ))}
                </ul>

                {selectedOrganization && (
                    <div className="organization-popup" onClick={handleClosePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close" onClick={handleClosePopup}>&times;</span>
                            <h3>Organization Details</h3>
                            <p><b>Contact Name: </b>{selectedOrganization.Cname}</p>
                            <p><b>Contact Email: </b>{selectedOrganization.email}</p>
                            <p><b>Contact Number: </b>{selectedOrganization.number}</p>
                            <p><b>Address: </b>{selectedOrganization.address}</p>
                            <p><b>Type: </b>{selectedOrganization.type}</p>
                            <p><b>Area: </b>{selectedOrganization.area}</p>
                            <p><b>Governate: </b>{selectedOrganization.governate}</p>
                            <p><b>Location: </b>{renderLocationComponent(hardcodedfornowandpray)}</p>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default ViewRegisteredOrganizations;