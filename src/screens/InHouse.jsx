import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Fotographer from "../components/Fotographer";

import { changeLayOutColors } from "../utils/helpers";
const InHouse = () => {
  const [photographers, setPhotographers] = useState([]);
  useEffect(() => {
    changeLayOutColors("#fff");

    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "fotographer"] | order(order asc){
                       name,
                       title,
                       email,
                       mobile,
                       body,
                       image{
                           asset->{
                               _id,
                               order,
                               url
                           },
                           alt
                       }
                   }`);
      setPhotographers(data);
    };
    fetchSanityData();
  }, []);

  return (
    <main className='flex flex-col items-center'>
      <div className='mt-6 flex w-full px-2 lg:px-0 lg:w-2/3 flex-col'></div>
    </main>
  );
};

export default InHouse;
