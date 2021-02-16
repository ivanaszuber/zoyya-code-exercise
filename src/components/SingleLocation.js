import React from "react";

const SingleLocation = ({ location }) => {
  const { category, name, address, imageUrl } = location;
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h4>{category}</h4>
      <h3>{name}</h3>
      <p>{address}</p>
    </div>
  );
};

export default SingleLocation;
