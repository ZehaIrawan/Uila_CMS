import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <Link to="/register">
        <h2>Register</h2>
      </Link>

      <Link to="/login">
        <h2>Login</h2>
      </Link>

      <Link to="/upgrade">
        <h2>Upgrade</h2>
      </Link>

      <div>
        Manage your restaurant order online!
      </div>
    </div>
  );
};

export default Homepage;
