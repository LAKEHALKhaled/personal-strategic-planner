
import React from 'react';

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
    <div className="my-3">
      {/* <h4 className="card-header bg-dark text-light p-1 m-0">
        {area.areaAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          added this area on {area.createdAt}
        </span>
      </h4> */}
      
      <div className="bg-light py-1 center">
        <blockquote
          className="p-1"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            
          }}
        >
          My {area.areaText} Goals
        </blockquote>
      </div>
      <div>
       <img src="https://www.crosbyscholarsiredell.org/wp-content/uploads/sites/4/2020/01/Blue-Timeline-Cycle-Presentation-1-1024x516.png"  className="center" alt="" />
       <Smart/>
      </div>
      <div className="btn-black m-3 p-4 col-12">
        <p>“A goal properly set is halfway reached.” Zig Ziglar</p>
        <GoalForm areaId={area._id} />
      </div>
      
      <div className="btn-black col-12 mb-5">
        <GoalList goals={area.goals} />
      </div>
      
    </div>
  );
};

export default SingleArea;