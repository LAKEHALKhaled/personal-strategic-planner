import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {REMOVE_AREA} from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const AreaList = ({ areas, title }) => {
  const [removeArea, { error }] = useMutation(REMOVE_AREA, {
    update(cache, { data: { removeArea } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeArea },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const handleRemoveArea = async (area) => {
    try {
      const { data } = await removeArea({
        variables: { area },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!areas.length) {
    return <h3>No Areas of life balance exist so far, create new once</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {areas &&
        areas.map((area) => (
          <div key={area._id} className="card my-5 p-5 text-center">
            {/* <h4 className="card-header bg-primary text-light p-2 m-0">
              {area.areaAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                added this area in {area.createdAt}
              </span>
            </h4> */}
            <div className="card-body btn-white p-2 mb-3">
              <h6>{area.areaText}</h6>
              <h1 style={{fontSize: 3+'rem'}}>{area.areaText}</h1>
            </div>
            <Link
              className="btn btn-black m-5 btn-rounded "
              to={`/areas/${area._id}`}
            >
              Review Goals
            </Link>

            <button
                        type="button"
                        onClick={() => handleRemoveArea(area._id)}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
             </button>
            {/* <Link
              className="btn btn-black btn-rounded "
              to={`/areas/${area._id}`}
            >
              Remove Area
            </Link> */}
          </div>
        ))}
    </div>
  );
};

export default AreaList;
