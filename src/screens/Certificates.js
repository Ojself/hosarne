import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

import Certificate from "../components/Certificate";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "certificate"] | order(order asc){
                     title,
                     description,
                     url,
                     order,
                     hide,
                     logo{
                         asset->{
                             _id,
                             url
                         },
                         alt
                     }
                 }`);
      setCertificates(data.filter((d) => !d.hide));
    };
    fetchSanityData();
  }, []);
  return (
    <main className='min-h-screen flex flex-col items-center pt-12 mb-24'>
      <section className='flex flex-col lg:w-2/3 pt-12'>
        <h1 className='text-kb_blue text-3xl font-bold mb-6'>
          Sertifiseringer
        </h1>
        <div className='grid grid-cols-1 px-2 lg:px-0 gap-2 lg:grid-cols-2 lg:gap-4'>
          {!!certificates.length &&
            certificates.map((certificate) => <Certificate {...certificate} />)}
        </div>
      </section>
    </main>
  );
};

export default Certificates;
