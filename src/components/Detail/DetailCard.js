import React from 'react';

const DetailCard = (props) => {
  const { item } = props;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.content}</p>
      <p>{item.price}</p>
    </div>
  )
}

export default DetailCard;
