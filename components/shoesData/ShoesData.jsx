import React from 'react'
import Product from '../product/product';
const data = [
    {
        category: "shoes",
        Image: "../src/assets/shoes/asset 3.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 4.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 5.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 6.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 7.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 8.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 9.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 10.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 11.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 12.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 13.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: "2000",
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 14.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 15.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 16.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 17.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 18.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 19.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 20.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 21.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 22.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
      {
        category: "shoes",
        Image: "../src/assets/shoes/asset 23.jpeg",
        clothName: "Puma",
        CategoryName: "Smashic brand Logo Shoes",
        PriceTag: 2000,
      },
     
]

function ShoesData() {
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

export default ShoesData
