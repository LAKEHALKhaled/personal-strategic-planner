
import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import AreaList from '../components/AreaList';
import AreaForm from '../components/AreaForm';

import { QUERY_AREAS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_AREAS);
  const areas = data?.areas || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
             <div className= "center">
          {Auth.loggedIn() ? (
            <>
              <h3>you are logged in, you can Add more Areas and Goals on your Profile</h3>
            </>
          ) : (
            <>
             <h3>login to be able to add Areas and Goals</h3>
            </>
          )}
            </div>
           <img src="https://www.achs.edu.pk/assets/home/images/Vision.jpg" alt="" className= "center" />
        </div>
     
       
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AreaList
              areas={areas}
              title="Anonymous Areas and goals..."
            />
          )}
        </div>
      </div>
      
    </main>
  );
};

export default Home;
