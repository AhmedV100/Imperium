import React, { useState } from "react";
import "./register.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

export default function Register({ onRegisteredUsersChange }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [goveronate, setGoveronate] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    if (
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword ||
      !email ||
      !contactNumber ||
      !address ||
      !area ||
      !goveronate ||
      !gender ||
      !termsAccepted
    ) {
      setErrorMessage("Please fill in all fields and accept the terms");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setErrorMessage("Password and confirm password do not match");
      return;
    }

    const donors = JSON.parse(localStorage.getItem("donors"));
    const newId = donors.length + 100;
    var newDonor = {
      id: newId,
      object_type: "donor",
      username: firstName,
      password: password,
      rule: "Teacher",
    };

    const newDonors = [...donors, newDonor];
    localStorage.setItem("donors", JSON.stringify(newDonors));

    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setContactNumber("");
    setAddress("");
    setArea("");
    setGoveronate("");
    setGender("");
    setTermsAccepted(false);

    console.log("User registered successfully");
    navigate(`/donor/${newId}`);
  };

  return (
    <>
      <header className="headnav">
        <NavBar />
      </header>
      <div className="wrapp">
        <div className="box2">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Register</h1>
            <div className="inputs2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="lname-confirm"
                placeholder="Last name"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="lname-confirm"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="inputs2_1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Contact number"
                min="0"
                minLength={8}
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                className="area"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
              <input
                type="text"
                value={goveronate}
                onChange={(e) => setGoveronate(e.target.value)}
                className="gov"
                placeholder="Goveronate"
                required
              />
            </div>

            <div className="gender">
              <label>
                <strong>Gender:</strong>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
              </label>
            </div>

            <div className="upload">
              <label for="uploadFile">
                <strong>Upload Documentations(if applicable):</strong>
              </label>
              <input type="file" className="choosefile" id="uploadFile" />
            </div>

            <div className="TermBox">
              <label for="checkbox">
                {" "}
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />{" "}
                <strong>I accept the </strong> Terms of Use
                <strong> & </strong>Privacy Policy.
              </label>
            </div>

            <button type="submit" onClick={handleRegister}>
              Register Now
            </button>

            <div className="error-message">{errorMessage}</div>

            <div className="resgisteration">
              <p>
                <strong>Already have an account? </strong>
                <a href="/login">Sign in</a>{" "}
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
