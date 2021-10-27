import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import ServiceSingle from "../components/ServiceSingle";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "services"] | order(order asc){
                     serviceTitle,
                     description,
                     mainImage{
                      asset->{
                          _id,
                          order,
                          url
                      },
                      alt
                  }  
                 }`);
      setServicesData(data);
    };
    fetchSanityData();
  }, []);
  return (
    <main className='flex flex-col items-center min-h-screen xl:p-12'>
      <section className='w-11/12 xl:w-4/5'>
        <h1 className='text-kb_blue text-3xl font-bold my-8'>Tjenester</h1>
        <div className='mb-8 grid-cols-1 grid gap-1 xl:gap-4 xl:grid-cols-2 xl:grid-flow-row '>
          {servicesData.map((service, i) => (
            <ServiceSingle
              key={service.serviceTitle}
              {...service}
              imageToRight={i % 2 === 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
