import React from "react";
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div>
      <div className="login">
        <div className="facebook">
            <div className="facebooktext">
                facebook
                </div>
                <div className="title">
                Facebook helps you connect and share
                <br></br> with the people in your life.
                </div>
            

        </div>

      
      <div className="LoginContainer">
        <div className="Logindetails">
            <input type="email" placeholder="Email address or phone number"></input>
            <br></br>
            <input type="Password" placeholder="Password"></input>
            <br></br>
            <button className="btn">Log in</button>
            <div className="forget">
                <a href="forget">Forgotten Password?</a>
            </div>
            </div>
            <br></br>
            <button className="btns">Create New Account</button>
        
        <p></p>
        <br></br>
        <div className="page">
            <a href="createpage"> <b>Create a Page</b></a> for a celebrity, brand or business
        </div>
       </div>
      </div>
    </div>
  )
}
