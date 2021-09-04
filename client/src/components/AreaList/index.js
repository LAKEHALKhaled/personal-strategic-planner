import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {REMOVE_AREA} from '../../utils/mutations';
import { QUERY_AREAS } from '../../utils/queries';
import Auth from '../../utils/auth'
import Button from '@material-ui/core/Button';
const AreaList = ({ areas, title, isLoggedInUser = true}) => {
  
  
  // const [removeArea, { error }] = useMutation(REMOVE_AREA)

  const [removeArea, { error }] = useMutation(REMOVE_AREA, {
    update(cache, { data: { removeArea } }) {
      try {
        const { areas } = cache.readQuery({ query: QUERY_AREAS });

        cache.writeQuery({
          query: QUERY_AREAS,
          data: { areas: [...areas] },
        });
        
      } catch (e) {
        console.error(e);
      }
    },
  });


  const handleRemoveArea = async (areaId) => {
    console.log(areaId)
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      if (!token) {
        return false;
      }
    try {
      const { data } = await removeArea({
        variables: { areaId },
      });
      window.location.reload()
      console.log(data)
    } catch (err) {
     
      console.error(err);
    }
  };

  if (!areas?.length) {
    return <h5 className="text-center">No Areas added yet, create new once</h5>;
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
              
              to={`/areas/${area._id}`}
            >
              <Button variant="contained" color="primary" className="py-2 m-5" disableElevation  type="submit">
              Review Goals
              </Button>
            </Link>
            {isLoggedInUser && (
            <Button variant="contained" color="primary" className="py-2 m-5" disableElevation  type="submit"
              onClick={() => handleRemoveArea(area._id)}>
              <span role="img" aria-label="delete">
                Remove Area
              </span>
              </Button>
              )}
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
