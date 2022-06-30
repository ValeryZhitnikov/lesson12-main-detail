import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestServicesList } from '../../actions/actionCreators';

const MainList = () => {
  const { services, loading, error } = useSelector(state => state.servicesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestServicesList());
  }, []);

  const repeatHandler = () => {
    dispatch(requestServicesList());
    console.log(services);
  }

  // const servicesList = services.map(service => {
  //   return <li key={service.id}>{service.name}</li>
  // });

  return (
    <>
    <div>Main list</div>
    { loading && <p>Loading...</p> }
    { error && <><p>Произошла ошибка!</p><button onClick={repeatHandler}>Повторить</button></>   }
    { services && <ul></ul> }
    <button onClick={repeatHandler}>Повторить</button>
    </>
  );
}

export default MainList;