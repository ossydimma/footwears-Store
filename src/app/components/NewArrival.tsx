"use client"
import { Playfair_Display, Roboto_Condensed } from "next/font/google";
import { useEffect, useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto_Condensed({ subsets: ["latin"] });

interface dataType {
  id : number;
  title : string;
  old_price : string;
  price : string;
  images : [];

}

const loadData = async () => {
  try {
      const raw = await fetch('../Json/data.json');
      const {data} = await raw.json();
      console.log("data", data)
      return {
        props : {items : data}
      }
    } catch (error) {
      console.error('Error fetching data: ', error)
}

const  NewArrival =  ({items } : dataType) => {

  const [apiData, setApiData] = useState<undefined| dataType>(undefined);

  

  // useEffect(() => {
  //   loadData('../Json/data.json').then (data => setApiData(data))
  // }, [])

  // useEffect(() => {
  //   fetch('../Json/data.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('the data', data)
  //       setApiData(data)
  //       console.log('the data', apiData)
  //     })
  // }, [])
  
  
    
  return (
    <main className={` mt-14 ml-10`}>
        <div>
            {/* <h2 className={` ${roboto.className} text-5xl font-semibold`}>New Arrival</h2> */}
            {
              //  apiData !== null ? 
              //   apiData.( (item)=>(
              //     <h2>{item}</h2>
              //   ) )
              // : null
              apiData ?
               <p className={` ${roboto.className} text-5xl font-semibold`}>{apiData?.old_price}</p>
              : <p className={` ${roboto.className} text-5xl font-semibold`}>not found</p>
            }
        </div>

    </main>
  )
}

export default NewArrival