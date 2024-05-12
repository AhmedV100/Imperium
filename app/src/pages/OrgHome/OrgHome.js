import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrgHome.css";
import "../Login/login.css";
import NavBarOrg from "../../components/NavBarOrg";
import image from "../../images/Resala-logo.png";
import Card from "react-bootstrap/Card";
import Footer from "../../components/footer";

function OrgHome() {
  const { orgId } = useParams();
  const [organization, setOrganization] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedOrganizations =
      JSON.parse(localStorage.getItem("organizations")) || [];
    const storedOrganization = storedOrganizations.find(
      (org) => org.id === parseInt(orgId)
    );

    setOrganization(storedOrganization);

    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const orgPosts = storedPosts.filter(
      (post) => post.orgId === parseInt(orgId)
    );
    setPosts(orgPosts);
  }, []);



  return (
    <>
      <NavBarOrg posts={posts} />
      <div className="container1">
        <div className="ORGcontainer">
          <div className="content">
            {organization ? (
              <div className="centered">
                <h2>{organization.name}</h2>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={image} className="card-img" />
                  <Card.Body>
                    <Card.Title>Your Organization</Card.Title>
                    <p>Organization Type: {organization.organizationType}</p>
                    <p>Address: {organization.address}</p>
                    <p>Area: {organization.area}</p>
                    <p>Governorate: {organization.governorate}</p>
                  </Card.Body>
                </Card>
               
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrgHome;
