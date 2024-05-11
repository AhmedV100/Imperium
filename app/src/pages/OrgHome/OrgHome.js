import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrgHome.css"; 
import NavBarOrg from "../../components/NavBarOrg";
import image from "../../images/Resala-logo.png";

function OrgHome() {
  const { orgId } = useParams();
  const data = JSON.parse(localStorage.getItem("data"));
 const [organizations, setOrganizations] = useState([]);
 const [organization, setOrganization] = useState(null);

 const [posts, setPosts] = useState([]);
 const [allPosts, setAllPosts] = useState([]);

useEffect(() => {
  const storedOrganizations =
    JSON.parse(localStorage.getItem("organizations")) || [];
  const storedOrganization = storedOrganizations.find(
    (org) => org.id === parseInt(orgId)
  );

  setOrganization(storedOrganization);

  const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  const orgPosts = storedPosts.filter((post) => post.orgId === parseInt(orgId));
  setPosts(orgPosts);
}, []);

const updateOrganization = (updatedOrg) => {
  // Update organization state
  setOrganization(updatedOrg);

  // Update local storage
  const newOrgs = organizations.map((org) =>
    org.id === parseInt(orgId) ? updatedOrg : org
  );
  setOrganizations(newOrgs); // Fix this line

  localStorage.setItem("organizations", JSON.stringify(newOrgs));
};

// Function to update posts
const updatePosts = (updatedPost) => {
  // Update posts state
  const updatedPosts = posts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  setPosts(updatedPosts);

  // Update allPosts state
  const allNewPosts = allPosts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  setAllPosts(allNewPosts);

  localStorage.setItem("posts", JSON.stringify(allNewPosts));
};

 // Function to delete a post
 const deletePost = (postId) => {
   const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
   const allUpdatedPosts = allPosts.filter((post) => post.id !== postId);

  setAllPosts(allUpdatedPosts);

   localStorage.setItem("posts", JSON.stringify(allUpdatedPosts));
 };

return (
  <>
    <NavBarOrg  posts = {posts}/>
    <div className="container">
      <div className="ORGcontainer">
        <div className="content">
          {organization ? (
            <div>
              <h2>{organization.name}</h2>
              <p>Organization Type: {organization.organizationType}</p>
              <p>Address: {organization.address}</p>
              <p>Area: {organization.area}</p>
              <p>Governorate: {organization.governorate}</p>
              <h3>Posts</h3>
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>
                    Category: {post.object_type}, Fulfilled:{" "}
                    {post.fulfilled ? "Yes" : "No"}{" "}
                    <button
                      onClick={() =>
                        updatePosts({
                          ...post,
                          fulfilled: !post.fulfilled,
                        })
                      }
                    >
                      Toggle Fulfilled
                    </button>{" "}
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <div className="center-section">
            <p>This is the center section.</p>
            {organization && organization.logo && (
              <img src={image} alt="Example" />
            )}
            <button>Create New Post</button>
          </div>
        </div>
      </div>
    </div>
  </>
);

}

export default OrgHome;
