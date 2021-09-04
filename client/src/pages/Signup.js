import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4 mt-20">
      <div className="col-12 col-lg-10 mt-5">
        <div className="card">
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              
              <div className="mt-5 px-5 py-3">
                <div className="my-3 text-center">
                  <Avatar style={{backgroundColor: "#1976d2", marginLeft: "auto", marginRight: "auto"}} >
                    <AccountCircleIcon/>
                  </Avatar>
                  <h1>Signup</h1>
                  <p>Please fill up your information</p>
                </div>
                <form onSubmit={handleFormSubmit} className="my-5 flex-column">
                <TextField
                    className="block mb-4"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    size="normal"
                  />
                  
                  <TextField
                    className="block mb-4"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />

                  <TextField
                    className="block mb-4"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                   <Button variant="contained" color="primary" className="py-2" disableElevation  type="submit">
                  
                    Submit
                  </Button>

                  <div className="mt-3 text-center">
                    <p>Have an account? <a href="/login" className="red">Login</a>
                    </p>
                  </div>
                </form>
            
              </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
