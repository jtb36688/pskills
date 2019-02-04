import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
      <div className="MainNav">
        <Link  to="/">
          Home
        </Link>
        <Link  to="/employers/">
          Find Workers
        </Link>
        <Link  to="/admin/">
          Admin Login
        </Link>
        <Link  to="/help/">
          Contact Us / Help
        </Link>
      </div>
    );
  };

  export default Navigation;