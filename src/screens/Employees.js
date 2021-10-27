import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import employeesImage from "../imgs/employees.jpg";

const Employees = () => {
  const [employeesData, setEmployeesData] = useState([]);
  useEffect(() => {
    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "employee"] | order(order asc){
                     title,
                     order,
                     name
                 }`);
      setEmployeesData(data);
    };
    fetchSanityData();
  }, []);
  return (
    <main className='min-h-screen p-4 lg:p-12 flex flex-col items-center '>
      <section className='w-full lg:w-1/2'>
        <h1 className='text-kb_blue text-xl lg:text-3xl font-bold my-8'>
          Ledelse & Administrasjon:
        </h1>

        <div className='grid grid-rows-4 grid-flow-col gap-4 my-8 mb-12'>
          {employeesData.map((employee) => {
            return (
              <div key={employee.name} className=''>
                <p className='text-sm lg:text-base text-kb_gray '>
                  {employee.title}
                </p>
                <p className='text-sm lg:text-base text-kb_gray font-bold'>
                  {employee.name}
                </p>
              </div>
            );
          })}
        </div>
        <a href={employeesImage} rel='noreferrer' target='_blank'>
          <img src={employeesImage} alt='Knut Bjerke Ansatte' />
        </a>
      </section>
    </main>
  );
};

export default Employees;
