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
      <div className="flex-row justify-center mb-3 pt-20">
        <div className="pt-5">
        <img src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" className="center" alt=""></img>
        </div>
        
        <div className="col-12 col-md-10 mb-3 p-3 text-center card mt-5 pt-5">
        
        
            <AreaForm />
          </div>
        <div className="col-12 col-md-10 mb-5">
          <AreaList
            areas={user.areas}
            // title={`${user.username}'s areas...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
       
        
      </div>
    </div>
  );
};

export default Profile;
