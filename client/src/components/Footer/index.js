import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <Button variant="contained" color="primary" className=" mb-3 py-1" disableElevation  type="submit"
            onClick={() => history.goBack()}>
            &larr; Go Back
          </Button>
        )}
        <h5>
          {' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
          
          </span>{' '}
          Personal Strategic Planning 
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
