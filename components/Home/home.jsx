import React from "react";
import heroimg from "../../assets/heroImg.jpg";
import "./home.css";
import Product from "../product/product";

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

function Home() {
  // const[Objdata, setObjdata] = usestate([]);
  return (
    <div className="home ">
      <img
        className="custom_css w-full h-100 object-fit object-center"
        src={heroimg}
        alt=""
      />
      <div className="product__row flex z-0">
        {
          data.map((ans) =>
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
    </div>
  );
}

export default Home;
