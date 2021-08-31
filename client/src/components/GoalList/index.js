
import React from 'react';

const GoalList = ({ goals = [] }) => {
  if (!goals.length) {
    return <h3>No Goals are set, please enter your goals that you want to acheave!</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Goals
      </h3>
      <div className="flex-row my-4">
        {goals &&
          goals.map((goal) => (
            <div key={goal._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {goal.goalAuthor} goal added {' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {goal.createdAt}
                  </span>
                </h5>
                <p className="card-body">{goal.goalText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default GoalList;