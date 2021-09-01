
import React from 'react';

const GoalList = ({ goals = [] }) => {
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
            </div>
          ))}
      </div>
   
  );
};

export default GoalList;