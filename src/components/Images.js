import React from 'react' ;

const Images = ({ product }) => {
  return <img src={product.image} alt={product.name} />;
};

export default Images