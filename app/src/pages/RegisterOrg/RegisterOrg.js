import React , { useState } from "react";
import "./registerOrg.css"
import NavBar from "../../components/NavBar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import users from "../../Data/users.json"

function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [registeredUsers, setRegisteredUsers] = useState([]);

    const handleRegister2 = () => {

        if (!firstName || !lastName || !password || !confirmPassword) {
            setErrorMessage('Please enter First name, Last name, Password');
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

        console.log('User registered successfully');
        navigate("/organization/id:"+newUser.id);

    };


    return (
        <>
            <header className="headnav"><NavBar/></header>
            <div className="wrapp2">
                <div className="box3">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>Organization Resgisteration</h1>
                        <div className="inputs3">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" required/>
                            <input type="text" value={lastName}  onChange={(e) => setLastName(e.target.value)} className="lname-confirm" placeholder="Last name" required/>
                            <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="lname-confirm" placeholder="Confirm Password" required/>      
                        </div>
                        <div className="inputs3_1">
                            <input type="email" placeholder="Email" required/>
                            <input type="number" placeholder="Contact number" min="0" minLength={8} required/>   
                            <input type="text" placeholder="Address" required/>
                            <hr></hr>
                            <input type="text" placeholder="Organization Name" required/>
                            <input type="text" placeholder="Organization Type" required/>
                            <input type="text" placeholder="Organization Address" required/>
                            <input type="text" className="area" placeholder="Area" required/>   
                            <input type="text" className="gov" placeholder="Goveronate" required/>     
                        </div>

                        <div className="gender">
                            <label>
                                <strong>Gender:</strong>
                                <input type="radio" name="gender" value="male"/> Male
                                <input type="radio" name="gender" value="female"/> Female
                            </label>
                        </div>

                        <div className="upload">
                            <label for="uploadFile"><strong>Upload Documentations:</strong></label>
                            <input type="file" className="choosefile" id="uploadFile"/> 
                        </div>

                        <div className="TermBox">
                            <label for="checkbox"> <input type="checkbox" id="checkbox"/> <strong>I accept the </strong> <a href="#">Terms of Use </a><strong> & </strong> <a href="#">Privacy Policy</a>.</label>
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

export default Register;