// OrgHome.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrgHome.css"; // Import CSS file
import NavBarOrg from "../../components/NavBarOrg";
import image from "../../images/Resala-logo.png";
import { useAppContext } from "../../Provider/DataProvider";

function OrgHome() {
  const { orgId } = useParams();
  const { data, setData } = useAppContext();
  console.log("the id in the orgHome:",orgId);
  const organizations = data.organizations;
  console.log(organizations);
  const tempOrganization = organizations.filter(
    (org)=> 
      org["id"] === orgId
    );
  console.log('the filtered organizatios:',tempOrganization);
const [organization, setOrganization] = useState(
  tempOrganization.length > 0 ? tempOrganization[0] : null
);

    var PostsValue = data.posts;
  var tempPosts = PostsValue.filter((post)=> post.orgId === orgId);
  const [posts, setPosts] = useState(tempPosts);
  
  // function to update organization
  const updateOrganization = (updatedOrg) => {

    if (!data) return;
    if(!organization)return;
    setOrganization(updatedOrg);
    const updatedOrgs = data.organizations.map((org) =>
      org.id === orgId ? updatedOrg : org
    );

    const updatedData = { ...data, organizations: updatedOrgs };
    setData(updatedData);
  };
  
  

  // Function to update a post
  const updatePost = (postId, updatedPostData) => {
    if (!data) return;
    if(!posts)return;
    
    const updatedPosts = data.posts.map((post) =>
      post.id === postId && post.orgId === orgId ? updatedPostData : post
    );
    const updatedData = { ...data, posts: updatedPosts };
    setData(updatedData);

     updatedPosts = posts.map((post) =>
      post.id === postId ? updatedPostData : post
    );
    setPosts(updatedPosts);

  };

  // Function to delete a post
  const deletePost = (postId) => {
    if (!data) return;
    if(!posts)return;
    const updatedPosts = data.posts.filter(
      (post) => post.id !== postId || post.orgId!==orgId
    );
    const updatedData = { ...data, posts: updatedPosts };
    setData(updatedData);
    updatedPosts = posts.filter( 
      (post) => post.id !== postId);
    setPosts(updatedPosts);
  };


  return (
    <>
      <NavBarOrg
        organization={organization}
        updateOrganization={updateOrganization}
      />
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
                {posts.map((post) => (
                  
                  <li key={post.id}>
                    Category: {post.category}, Fulfilled:{" "}
                    {post.fulfilled ? "Yes" : "No"}{" "}
                    <button
                      onClick={() =>
                        updatePost(post.id, { fulfilled: !post.fulfilled })
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
    </>
  );
};

export default OrgHome;
