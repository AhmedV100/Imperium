import React, { useState } from "react";
import "./registerOrg.css"
import NavBar from "../../components/NavBar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

function RegisterOrg() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [organizationType, setOrganizationType] = useState('');
    const [organizationAddress, setOrganizationAddress] = useState('');
    const [area, setArea] = useState('');
    const [goveronate, setGoveronate] = useState('');
    const [gender, setGender] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [registeredUsers, setRegisteredUsers] = useState([]);

    const handleRegister2 = () => {
        if (!firstName || !lastName || !password || !confirmPassword || !email || !contactNumber || !address || !organizationName || !organizationType || !organizationAddress || !area || !goveronate || !gender) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            setErrorMessage('Password and confirm password do not match');
            return;
        }

        // Combine first name and last name to create username
        const username = `${firstName} ${lastName}`;
        const object_type = 'organization';
        const id = 7;

        // Create a new user object
        const newUser = {
            id,
            object_type,
            username,
            password
        };

        // Store the new user in the array of registered users
        setRegisteredUsers(prevUsers => [...prevUsers, newUser]);

        // Store the updated users array in localStorage
        localStorage.setItem('users', JSON.stringify(registeredUsers));

        setFirstName('');
        setLastName('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
        setContactNumber('');
        setAddress('');
        setOrganizationName('');
        setOrganizationType('');
        setOrganizationAddress('');
        setArea('');
        setGoveronate('');
        setGender('');
        setTermsAccepted(false);

        console.log('User registered successfully');
        navigate("/organization/id:"+newUser.id);
    };

    return (
        <>
            <header className="headnav"><NavBar/></header>
            <div className="wrapp2">
                <div className="box3">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>Organization Registration</h1>
                        <div className="inputs3">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" required/>
                            <input type="text" value={lastName}  onChange={(e) => setLastName(e.target.value)} className="lname-confirm" placeholder="Last name" required/>
                            <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="lname-confirm" placeholder="Confirm Password" required/>      
                        </div>
                        <div className="inputs3_1">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                            <input type="number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact number" min="0" minLength={8} required/>   
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required/>
                            <hr></hr>
                            <input type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} placeholder="Organization Name" required/>
                            <input type="text" value={organizationType} onChange={(e) => setOrganizationType(e.target.value)} placeholder="Organization Type" required/>
                            <input type="text" value={organizationAddress} onChange={(e) => setOrganizationAddress(e.target.value)} placeholder="Organization Address" required/>
                            <input type="text" className="area" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" required/>   
                            <input type="text" className="gov" value={goveronate} onChange={(e) => setGoveronate(e.target.value)} placeholder="Goveronate" required/>     
                        </div>

                        <div className="gender">
                            <label>
                                <strong>Gender:</strong>
                                <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)}/> Male
                                <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)}/> Female
                            </label>
                        </div>

                        <div className="upload">
                            <label htmlFor="uploadFile"><strong>Upload Documentations:</strong></label>
                            <input type="file" className="choosefile" id="uploadFile"/> 
                        </div>

                        <div className="TermBox">
                            <label htmlFor="checkbox"> <input type="checkbox" id="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} required/> <strong>I accept the </strong> <a href="#">Terms of Use </a><strong> & </strong> <a href="#">Privacy Policy</a>.</label>
                        </div>

                        <button type="submit" onClick={handleRegister2}>Register Now</button>

                        <div className="error-message">{errorMessage}</div>

                        <div className="resgisteration">
                            <p><strong>Already have an account? </strong><a href="/login">Sign in</a> </p>
                        </div>
                    </form>
                </div>
            </div>
            <footer><Footer/></footer>
        </>
    );
}

export default RegisterOrg;