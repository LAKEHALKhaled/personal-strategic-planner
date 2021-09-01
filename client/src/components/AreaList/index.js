import React from 'react';
import { Link } from 'react-router-dom';

const AreaList = ({ areas, title }) => {
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
              className="btn btn-black btn-lg btn-rounded "
              to={`/areas/${area._id}`}
            >
              Add/Review Goals
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AreaList;
