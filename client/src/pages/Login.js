import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Auth from '../utils/auth';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center-sm  mb-4 mt-20">
      <div className="col-12 col-lg-10 mt-5">
        <div className="card">
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/me">back to the homepage.</Link>
              </p>
            ) : (
              <div className="mt-5 px-5 py-3">
                <div className="my-3 text-center">
                  <Avatar style={{backgroundColor: "#1976d2", marginLeft: "auto", marginRight: "auto"}} >
                    <LockOpenIcon/>
                  </Avatar>
                  <h1>Login</h1>
                  <p>Please fill up your information</p>
                </div>
              <form onSubmit={handleFormSubmit} className="my-5 flex-column">
                <TextField
                  className="block mb-4"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  size="normal"
                />
                <TextField
                  className="block mb-4"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  size="normal"
                />
                <Button variant="contained" className="py-2" disableElevation color="primary" type="submit">
                  Submit
                </Button>
                <div className="mt-3 text-center">
                    <p>You don't have an account? <a href="/signup" className="red">Signup</a>
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

export default Login;
