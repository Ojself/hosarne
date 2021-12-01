import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Human from "../components/Human";

const Humans = () => {
  const [humans, setHumans] = useState([]);
  useEffect(() => {
    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "human"] | order(order asc){
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
      setHumans(data);
    };
    fetchSanityData();
  }, []);

  return (
    <main className='flex flex-col items-center'>
      <div className='mt-6 flex w-8/12 flex-col'>
        {humans.map((human) => (
          <Human key={human.name} {...human} />
        ))}
      </div>
    </main>
  );
};

export default Humans;
