import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrgHome.css"; 
import NavBarOrg from "../../components/NavBarOrg";
import image from "../../images/Resala-logo.png";

function OrgHome() {
  const { orgId } = useParams();
  const data = JSON.parse(localStorage.getItem("data"));
 const [organization, setOrganization] = useState(null);

 // State for posts
 const [posts, setPosts] = useState([]);

useEffect(() => {
  const storedOrganizations =
    JSON.parse(localStorage.getItem("organizations")) || [];
  console.log("hi from the newest:",storedOrganizations);
  const storedOrganization = storedOrganizations.find(
    (org) => org.id === parseInt(orgId)
  );

  setOrganization(storedOrganization);

  const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  const orgPosts = storedPosts.filter((post) => post.orgId === parseInt(orgId));
  setPosts(orgPosts);
}, []);


 const updateOrganization = (updatedOrg) => {
   setOrganization(updatedOrg);
   // Update local storage
   const newData = {
     ...data,
     organizations: data.organizations.map((org) =>
       org.id === updatedOrg.id ? updatedOrg : org
     ),
   };
   localStorage.setItem("data", JSON.stringify(newData));
 };

 // Function to update posts
 const updatePosts = (updatedPost) => {
  const updatedPosts = posts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
   setPosts(updatedPosts);
   // Update local storage
   const newData = {
     ...data,
     posts: data.posts.map((post) =>
       post.orgId === parseInt(orgId)
         ? updatedPosts.find((updatedPost) => updatedPost.id === post.id) ||
           post
         : post
     ),
   };
   localStorage.setItem("data", JSON.stringify(newData));
 };

 // Function to delete a post
 const deletePost = (postId) => {
   const updatedPosts = posts.filter((post) => post.id !== postId);
   updatePosts(updatedPosts);

   // Update local storage
   const newData = {
     ...data,
     posts: data.posts.filter((post) => post.id !== postId),
   };
   localStorage.setItem("data", JSON.stringify(newData));
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
                    Category: {post.category}, Fulfilled:{" "}
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
