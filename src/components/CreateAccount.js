import React, { useState } from 'react';
import './CreateAccountStyles.css';
import { Link } from "react-router-dom";

const CreateAccount = () => {
  // State to store user registration data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    localStorage.setItem("confirmPassword",confirmPassword)
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }
    // You can implement your user registration logic here.
    // Typically, this would involve making an API request to your server.
    // For this example, we'll just display the entered data.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear password match error if passwords match
    setPasswordMatchError('');
    // Reset the form fields (optional)
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    alert("Created account successfully . Now you can signUp");
  };
  return (
    <div className="create-account">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {passwordMatchError && <p className="error">{passwordMatchError}</p>}
        <button type="submit">Create Account</button>
      </form>
      <Link to="/signup">
        <button className='backbutton'>Sign In</button>
      </Link>
    </div>
  );
};

export default CreateAccount;
