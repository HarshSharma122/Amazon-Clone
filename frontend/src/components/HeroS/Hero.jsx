import React, { useEffect, useState } from 'react'
import Productsparts from '../Products/productsparts'
function Hero() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        try {
            fetch('http://localhost:3000/productData').then((res) => res.json()).then((ans) => setdata(ans))
        }
        catch (error) {
            console.log(error);

        }
    }, [])

    return (
        <div className='grid grid-cols-4 gap-4 z-0 mt-10 mr-5'>
            {
                data.map((ans) => (
                    <Productsparts product_name={ans.product_name} price={ans.price} quantity={ans.quantity} description={ans.description} image={ans.image} />
                ))

            }

        </div>
    )
}

export default Hero
