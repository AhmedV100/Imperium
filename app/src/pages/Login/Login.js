import React from "react";
import "./login.css"
import { RiUserHeartLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa";

function Login() {
    return (
       <div className="container1"> 
            <div className="box">
                    <form action="">
                        <h1>Login</h1>
                        <div className="inputs">
                            <RiUserHeartLine />&nbsp;
                            <input type="text" placeholder="Username" required/>
                            
                        </div>
                        <div className="inputs">
                            <FaLock />&nbsp;
                            <input type="password" placeholder="Password" id="myInput" required/>
                        </div>
                        <div className="remember_forgot">
                            <div className="rememberBox">
                                <label> <input type="checkbox" /> Remember Me</label>
                            </div>
                            <div className="forgotBox">
                                <a href="#"> Forgot Password? </a>
                            </div>    
                        </div>
                        <button type="submit">Login</button>
                        <div className="resgisteration">
                            <p><strong>Don't have an account?</strong> <a href="/Register">Register Here</a> </p>
                        </div>
                    </form>
            </div>
           
      </div>   
    );
  } 
  export default Login;