import React, { useState } from 'react';
import "./SignStyles.css"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const SignIn = () => {
  // State to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( Data === email && Data1 === password){
      navigate('/')
      localStorage.clear()
    }else{
      alert("PLEASE ENTER CORRECT DETAILS")
    }
    // You can implement your authentication logic here.
    // Typically, this would involve making an API request to your server.

    // For this example, we'll just display the entered email and password.
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const Data = localStorage.getItem("email");
  console.log('userEmail', Data);
  const Data1 = localStorage.getItem("password");
  console.log('userPassword', Data1);

  return (
    <>
    <div className="sign-in">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <Link to ="/createaccount">
      <button className='hlw' type='submit'>Create New Account</button>
      </Link>
    </div>
    </>
  );
};

export default SignIn;
