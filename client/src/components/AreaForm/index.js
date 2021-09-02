import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_AREA} from '../../utils/mutations';
import { QUERY_AREAS } from '../../utils/queries';

import Auth from '../../utils/auth';

const AreaForm = () => {
  const [areaText, setAreaText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addArea, { error }] = useMutation(ADD_AREA, {
    update(cache, { data: { addArea } }) {
      try {
        const { areas } = cache.readQuery({ query: QUERY_AREAS });

        cache.writeQuery({
          query: QUERY_AREAS,
          data: { areas: [addArea, ...areas] },
        });
        
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addArea({
        variables: {
          areaText,
          areaAuthor: Auth.getProfile().data.username,
        },
      });

      setAreaText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'areaText' && value.length <= 30) {
      setAreaText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h5>We sugggest that you pick 8 to 12 most important areas in your life carefully </h5>
      <h6>Finance, Career, Health, Social, Family, Intelectual, Spiritual, Emotional,...</h6>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 30 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/30
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="areaText"
                placeholder="Add new area..."
                value={areaText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Area
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a area and set up a list of goals. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AreaForm;
