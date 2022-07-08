import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestServicesList } from '../../store/actions/actionCreators';

const MainList = () => {
  const { services, loading, error } = useSelector(state => state.servicesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestServicesList());
  }, []);

  const repeatHandler = () => {
    dispatch(requestServicesList());
  }

  const servicesList = services.map(service => {
    return <li key={service.id}><Link to={`/details/${service.id}`}>{service.name}</Link></li>
  });

  return (
    <>
    <div>Main list</div>
    { loading && <p>Loading...</p> }
    { error && <><p>Произошла ошибка!</p><button onClick={repeatHandler}>Повторить</button></>   }
    { services && !loading && !error && <ul>{servicesList}</ul> }
    </>
  );
}

export default MainList;