import React from 'react'
import Product from '../product/product';
const data = [
  {
    category: "men",
    Image: "../src/assets/asset 10.jpeg",
    clothName: "U.S Polo Assn",
    PriceTag: 675,
  },
  {
    category: "men",
    Image: "../src/assets/asset 11.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 890,
  },
  {
    category: "men",
    Image: "../src/assets/asset 12.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 1000,
  },
  {
    category: "men",
    Image: "../src/assets/asset 13.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 340,
  },
  {
    category: "men",
    Image: "../src/assets/asset 14.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 680,
  },
  {
    category: "men",
    Image: "../src/assets/asset 15.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 908,
  },
  {
    category: "men",
    Image: "../src/assets/asset 16.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 908,
  },
  {
    category: "men",
    Image: "../src/assets/asset 17.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 908,
  },
  {
    category: "men",
    Image: "../src/assets/asset 18.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 908,
  },
  {
    category: "men",
    Image: "../src/assets/asset 19.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 908,
  },
  {
    category: "men",
    Image: "../src/assets/asset 20.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 908,
  },
  {
    category: "men",
    Image: "../src/assets/asset 21.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 908,
  },
  {
    category: "men",
    Image: "../src/assets/asset 22.jpeg",
    clothName: "U.S Polo Assn",

    PriceTag: 908,
  },
 
];

function Boys() {
  return (
    <div className="product__row flex z-0 mt-13">
    {
      data.map((ans)=>
      (
        <Product
        name={ans.clothName}
        image={ans.Image}
        price={ans.PriceTag}
        rating={5}
        />
      ))
     
    }
    
      
  
  </div>
  )
}

export default Boys
