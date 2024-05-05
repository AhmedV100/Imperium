import React from "react";
import "./register.css"
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function Register() {
    return (
        <>
            <header className="headnav"><NavBar/></header>
            <div className="wrapp">
                <div className="box2">
                    <form action="">
                        <h1>Register</h1>
                        <div className="inputs2">
                            <input type="text" placeholder="First name" required/>
                            <input type="text" className="lname-confirm" placeholder="Last name" required/>
                            <input type="password" placeholder="Password" required/>
                            <input type="password" className="lname-confirm" placeholder="Confirm Password" required/>      
                        </div>
                        <div className="inputs2_1">
                            <input type="email" placeholder="Email" required/>
                            <input type="number" placeholder="Contact number" min="0" minLength={8} required/>   
                            <input type="text" placeholder="Address" required/>
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

                        <button type="submit">Register Now</button>

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