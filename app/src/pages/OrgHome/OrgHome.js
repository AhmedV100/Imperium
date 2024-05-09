import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import organizationsData from "../../Data/Organizations.json";
import "./OrgHome.css"; // Import CSS file
import NavBarOrg from "../../components/NavBarOrg";
import image  from "../../images/Resala-logo.png";
function OrgHome() {
  const { orgId } = useParams();
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    // Simulating data fetching from JSON file
    const org = organizationsData.organizations.find(
      (org) => org.id === parseInt(orgId)
    );
    setOrganization(org);
  }, [orgId]);
  console.log(organization);
  
  return (
    <>
      <NavBarOrg></NavBarOrg>
      <div className="container">
        <div className="content">
          {organization ? (
            <div>
              <h2>{organization.name}</h2>
              <p>Organization Type: {organization.organizationType}</p>
              <p>Address: {organization.address}</p>
              <p>Area: {organization.area}</p>
              <p>Governorate: {organization.governorate}</p>
              {/* Render organization's posts */}
              <h3>Posts</h3>
              <ul>
                {organization.posts.map((post) => (
                  <li key={post.id}>
                    Category: {post.category}, Fulfilled:{" "}
                    {post.fulfilled ? "Yes" : "No"}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <div className="center-section">
            <p>This is the center section.</p>
            {
                organization && organization.logo && 
            <img
              src={organization["logo"]}
              alt="Example"
            />
}
            <button>Create New Post</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrgHome;
