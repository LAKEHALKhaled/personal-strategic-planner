
import React from 'react';
import Button from '@material-ui/core/Button';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Smart from '../components/Card/Smart'
import GoalList from '../components/GoalList';
import GoalForm from '../components/GoalForm';

import { QUERY_SINGLE_AREA } from '../utils/queries';

const SingleArea = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { areaId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_AREA, {
    // pass URL parameter
    variables: { areaId: areaId },
  });

  const area = data?.area || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3 ">
      {/* <h4 className="card-header bg-dark text-light p-1 m-0">
        {area.areaAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          added this area on {area.createdAt}
        </span>
      </h4> */}
      
      <div className="card py-1 mt-20 text-center center">
        <blockquote
          className="p-1"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            
          }}
        >
         <h1>My {area.areaText} Goals</h1>
          <Button variant="contained" color="primary" className="py-2 m-3" disableElevation  type="submit">
                  
                  Ask PSP 
          </Button>
          <Button variant="contained" color="primary" className="py-2 m-3" disableElevation  type="submit">
                  
                  {area.areaText} advisor
          </Button>
        </blockquote>

      </div>
      
      <div className="col-12 col-md-10 mb-3 p-3 center text-center card mt-5 pt-5">
        <GoalForm areaId={area._id} />
      </div>
      <div className="btn-black col-12 mb-5">
        <GoalList goals={area.goals} />
      </div>
    </div>
  );
};

export default SingleArea;