import React, { useEffect, useState } from 'react';
import LiveProductCard from "./LiveProductCard";

const LiveProducts = () => {

    const [liveProducts, setLiveProducts] = useState(null);

    const getLiveProduct = async () => {
        const response = await fetch("http://localhost:5000/user/getLiveProducts",{
            method:"GET"
        })
        if(!response.ok){
          // Tommaroww here loading implement
            console.log("fetching error : ",response)
        }
        const data = await response.json();
        setLiveProducts(data);
    }

    useEffect(() => {
        getLiveProduct();
    },[])
  return (
    <div className="mt-1 md:mt-4 pt-10 md:p-16">
    <h1 className="text-lg md:text-2xl pl-6">Live Products</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {liveProducts &&
          liveProducts.map((item) => <LiveProductCard key={item.id} data={item}/>)
      }
    </div>
  </div>
  )
}

export default LiveProducts