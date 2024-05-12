import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiUserHeartLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Footer from "../../components/footer";
import "./login.css";

function Login({ registered }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const admins = JSON.parse(localStorage.getItem("admins"));
  const organizations = JSON.parse(localStorage.getItem("organizations"));
  const donors = JSON.parse(localStorage.getItem("donors"));

  var users = [...admins, ...organizations, ...donors];

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      if (user.object_type === "admin") {
        console.log("Login successful");
        navigate(`/admindashboard/${user.id}`);
      } else if (user.object_type === "organization") {
        console.log("Login successful");
        navigate(`/organization/${user.id}`);
      } else if (user.object_type === "donor"){
        console.log("Login successful");
        navigate(`/donor/${user.id}`);
      }
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <header className="headnav">
        <NavBar />
      </header>
      <div className="container1">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="inputs">
              <RiUserHeartLine />
              &nbsp;
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
            <div className="inputs">
              <FaLock />
              &nbsp;
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <div className="remember_forgot">
              <div className="rememberBox">
                <label>
                  {" "}
                  <input type="checkbox" /> Remember Me
                </label>
              </div>
              <div className="forgotBox">
                <a href="#"> Forgot Password? </a>
              </div>
            </div>
            <button type="submit">Login</button>
            <div className="error-message">{errorMessage}</div>
            <div className="resgisteration">
              <p style={{ marginBottom: "1%" }}>
                <strong>Don't have an account?</strong>
              </p>
              <p style={{ marginBottom: "1%" }}>
                <a href="/Register">Register Here</a>
              </p>
              <p style={{ marginBottom: "1%" }}>
                {" "}
                <strong>Or</strong>{" "}
              </p>
              <p>
                {" "}
                <a href="/RegisterOrg">Register as an Organization Here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Login;
