import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input} from '@material-ui/core';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
           
         ``<Input placeholder="Basic usage" />
          <Link className="text-light" to="/">
            <h1 className="m-0">Life Planner</h1>
          </Link>
          <p className="m-0">Set up strategic goals so you see progress in your life and have balance in all area of life</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <Button variant="contained" color="primary" style={{ marginLeft: 8 }}>
             Login
           </Button>
           <Button variant="contained" color="primary" style={{ marginLeft: 8 }}>
             Signup
           </Button>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
