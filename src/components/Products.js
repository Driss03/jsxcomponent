import React from 'react';


const Products = () => {
    const products = [

      {
        name: 'Real Madrid 2000/2001', 
        price: 159, 
        description: 'Official Real Madrid Jersey for the 2000 season', 
        image: 'realmadridteka.jpg', 
      },

      { 
        name: 'Barcelona 1999/2000',
        price: 149, 
        description: 'Official Barcelona Jersey for the 1999/2000 season', 
        image: 'barca.jpg' ,
      },

      { 
        name: 'AC Milan 2007', 
        price: 150, 
        description: 'Official AC Milan Jersey for the 2007 season', 
        image: 'milan.jpg' ,
      },

      { 
        name: 'Bayern Munich 2006', 
        price: 99, 
        description: 'Official Bayern Munich Jersey for the 2006 season', 
        image: 'bayern.jpg' ,
      },

    ];
  
    return (
      <div>
        {products.map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
    );
  };
  
  

export default Products;