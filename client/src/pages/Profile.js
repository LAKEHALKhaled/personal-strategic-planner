import React from 'react';
import AreaForm from '../components/AreaForm';
import AreaList from '../components/AreaList';
import { Redirect } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Profile = () => {
  const username = Auth.loggedIn() && Auth.getProfile().data.username;
  const { loading, data } = useQuery(QUERY_USER, {variables: { username: username }});
  
  if(!Auth.loggedIn()) return <Redirect to={'/'} />

  const user = data?.user;

  if(loading) return <div>Loading..</div>

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
        Setting goals is the first step in turning the invisible into the visible.
        Tony Robbins

        </h2>
        <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <AreaForm />
          </div>
        <div className="col-12 col-md-10 mb-5">
          <AreaList
            areas={user.areas}
            title={`${user.username}'s areas...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
       
        
      </div>
    </div>
  );
};

export default Profile;
