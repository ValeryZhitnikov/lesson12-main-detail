import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestService } from '../../store/actions/actionCreators';
import DetailCard from './DetailCard';

const Detail = () => {
  const { service, loading, error } = useSelector(store => store.service);
  const { sId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestService(sId));
  }, [])

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Произошла ошибка</p>}
      {service && !loading && !error && <DetailCard item={service} />}
      <Link to="/">Back</Link>
    </>
  );
}

export default Detail;