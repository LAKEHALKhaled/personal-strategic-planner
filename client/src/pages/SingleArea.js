
import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

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
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          My {area.areaText} Goals
        </blockquote>
      </div>

      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <GoalForm areaId={area._id} />
      </div>
      
      <div className="my-5">
        <GoalList goals={area.goals} />
      </div>
      
    </div>
  );
};

export default SingleArea;