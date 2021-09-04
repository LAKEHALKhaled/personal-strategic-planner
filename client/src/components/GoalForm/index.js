import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import { ADD_GOAL } from '../../utils/mutations';

import Auth from '../../utils/auth';

const GoalForm = ({ areaId }) => {
  const [goalText, setGoalText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addGoal, { error }] = useMutation(ADD_GOAL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addGoal({
        variables: {
          areaId,
          goalText,
          goalAuthor: Auth.getProfile().data.username,
        },
      });

      setGoalText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'goalText' && value.length <= 280) {
      setGoalText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      {/* <h4> what are the goals you want to acheave in this area of life?</h4> */}

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="goalText"
                placeholder="Add new SMART goal..."
                value={goalText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
            <Button variant="contained" color="primary" className=" mb-3 py-1" disableElevation  type="submit">
                Add Goal
                </Button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add new goals. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default GoalForm;
