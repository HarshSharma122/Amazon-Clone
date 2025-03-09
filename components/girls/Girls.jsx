import React from 'react'
import Product from '../product/product';
const data = [
    {
        category: "women",
        Image: "../src/assets/girls (1).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
      {
        category: "women",
        Image: "../src/assets/girls (2).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
      {
        category: "women",
        Image: "../src/assets/girls (3).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
      {
        category: "women",
        Image: "../src/assets/girls (4).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
      {
        category: "women",
        Image: "../src/assets/girls (5).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
      {
        category: "women",
        Image: "../src/assets/girls (6).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
      {
        category: "women",
        Image: "../src/assets/girls (7).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
      {
        category: "women",
        Image: "../src/assets/girls (8).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
      {
        category: "women",
        Image: "../src/assets/girls (9).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
      {
        category: "women",
        Image: "../src/assets/girls (10).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
      {
        category: "women",
        Image: "../src/assets/girls (11).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
      {
        category: "women",
        Image: "../src/assets/girls (12).jpeg",
        clothName: "Sassafras",
        CategoryName: "High Neck Cropped Top",
        PriceTag: 399,
      },
      
    
];
function Girls() {
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

export default Girls



