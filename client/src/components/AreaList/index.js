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
          <div key={area._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {area.areaAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                added this area in {area.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{area.areaText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/areas/${area._id}`}
            >
              Add 1 or multiple goals that you want to acheave in this area of balance
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AreaList;
