import { useMutation } from '@apollo/client';
import {REMOVE_GOAL} from '../../utils/mutations';

import React from 'react';
import Auth from '../../utils/auth'

const GoalList = ({ goals = [], isLoggedInUser = true }) => {

  const [removeGoal, { error }] = useMutation(REMOVE_GOAL)

  const handleRemoveGoal = async (goalId) => {
    
    console.log(goalId)
    console.log(window.location.href.split("/")[4])
    const areaId = window.location.href.split("/")[4]
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      if (!token) {
        return false;
      }
    try {
      const { data } = await removeGoal({
        variables: { areaId, goalId },
      });
      console.log(data)
    } catch (err) {
      console.error(err);
    }
  };

  if (!goals.length) {
    return <h3>No Goals are set, please enter your goals that you want to acheave!</h3>;
  }

  return (
    
      <div className="my-4">
        {goals &&
          goals.map((goal) => (
            <div key={goal._id} className="card my-5 p-5 text-center">
              <div className="card-body btn-white p-2 mb-2">
                <h5>
                {goal.goalText} 
                </h5>
                <small>
                 added on {goal.createdAt}
                </small>
              </div>
              {isLoggedInUser && (
            <button
              className="btn btn-black btn-rounded "
              type="button"
              onClick={() => handleRemoveGoal(goal._id)}
            >
              <span role="img" aria-label="delete">
                Remove Goal
              </span>
             </button>
              )}
            </div>
          ))}
      </div>
   
  );
};

export default GoalList;