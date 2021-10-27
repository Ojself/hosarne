import React from "react";

const Certificate = ({ logo, title, description, url }) => {
  console.log(logo);
  return (
    <div
      className='flex flex-row justify-between'
      style={{ border: "2px solid #F5BF3A", minHeight: "200px" }}
    >
      <div className='flex flex-col w-4/6 p-6'>
        <a href={url} rel='noreferrer' target='_blank'>
          <h3 className='text-kb_blue text-xl font-bold'>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
      <div className='w-1/6 flex items-center mr-4'>
        <a href={url} rel='noreferrer' target='_blank'>
          <img src={logo.asset.url} alt={`${title} logo`} />
        </a>
      </div>
    </div>
  );
};

export default Certificate;
