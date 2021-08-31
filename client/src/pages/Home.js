
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
          <AreaForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AreaList
              areas={areas}
              title="Some Feed for Area(s)..."
            />
          )}
        </div>
      </div>
      <div>
          {Auth.loggedIn() ? (
            <>
              <span>you are logged in, you can Add more Areas and Goals!</span>
            </>
          ) : (
            <>
             <div>login to be able to add Areas and Goals</div>
            </>
          )}
        </div>
    </main>
  );
};

export default Home;
