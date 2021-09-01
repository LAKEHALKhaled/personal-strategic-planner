
import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import AreaList from '../components/AreaList';
import AreaForm from '../components/AreaForm';
 import Card from '../components/Card/Card'
import { QUERY_AREAS } from '../utils/queries';
import Container from '@material-ui/core/Container';


const Home = () => {
  const { loading, data } = useQuery(QUERY_AREAS);
  const areas = data?.areas || [];

  return (

    <Container maxWidth="lg" className="pt-20">
        
      
    
     
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          
        >
             {/* <div className= "center">
          {Auth.loggedIn() ? (
            <>
              <h3>you are logged in, you can Add more Areas and Goals on your Profile</h3>
            </>
          ) : (
            <>
             <h3>login to be able to add Areas and Goals</h3>
            </>
          )}
            </div> */}
           <img src="https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80" alt="" className= "center" />
        </div>
     
       
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="m-5">
              <div className="text-center m-5 p-5">
                <h4>Anonymous</h4>
                <h1 className="mb-0" style={{fontSize: 4+'rem'}}>Areas <span style={{color: 'red'}}>&</span> Goals</h1>
              </div>
              <div className="text-center m-5">
                <AreaList
                  areas={areas}
                />
                
                <Card/>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </Container>
  );
};

export default Home;
