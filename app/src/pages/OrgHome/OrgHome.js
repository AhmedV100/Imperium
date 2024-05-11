
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrgHome.css"; // Import CSS file
import NavBarOrg from "../../components/NavBarOrg";
import image from "../../images/Resala-logo.png";
import { useAppContext } from "../../Provider/DataProvider";

function OrgHome() {
  const { orgId } = useParams();
  const { data, setData } = useAppContext();
  const organizations = data?.organizations || [];
  const tempOrganization = organizations.filter((org) => org.id === orgId);
  const [organization, setOrganization] = useState(
    tempOrganization.length > 0 ? tempOrganization[0] : null
  );
  const PostsValue = data?.posts || [];
  const tempPosts = PostsValue.filter((post) => post.orgId === orgId);
  const [posts, setPosts] = useState(tempPosts);

  const updateOrganization = (updatedOrg) => {
    if (!data || !organization) return;
    setOrganization(updatedOrg);
    const updatedOrgs = data.organizations.map((org) =>
      org.id === orgId ? updatedOrg : org
    );
    const updatedData = { ...data, organizations: updatedOrgs };
    setData(updatedData);
  };

  const updatePost = (postId, updatedPostData) => {
    if (!data || !posts) return;
    const updatedPosts = data.posts.map((post) =>
      post.id === postId && post.orgId === orgId ? updatedPostData : post
    );
    const updatedData = { ...data, posts: updatedPosts };
    setData(updatedData);
    const updatedTempPosts = posts.map((post) =>
      post.id === postId ? updatedPostData : post
    );
    setPosts(updatedTempPosts);
  };

  const deletePost = (postId) => {
    if (!data || !posts) return;
    const updatedPosts = data.posts.filter(
      (post) => post.id !== postId || post.orgId !== orgId
    );
    const updatedData = { ...data, posts: updatedPosts };
    setData(updatedData);
    const updatedTempPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedTempPosts);
  };

  return (
    <>
      <NavBarOrg
        organization={organization}
        updateOrganization={updateOrganization}
      />
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
                          updatePost(post.id, { fulfilled: !post.fulfilled })
                        }
                      >
                        Toggle Fulfilled
                      </button>{" "}
                      <button onClick={() => deletePost(post.id)}>
                        Delete
                      </button>
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
