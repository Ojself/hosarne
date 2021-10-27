import React from "react";

const PreviewProject = ({ description, mainImage, title, cb }) => {
  // Cuts the description to the first 130 characters
  const formattedDesc =
    description.length > 130
      ? `${description.substring(0, 130)}...`
      : description;
  return (
    <>
      <article className='flex flex-col h-auto lg:h-44 lg:flex-row justify-between my-12'>
        <div className='w-full lg:w-1/3'>
          <img
            className='h-full w-full object-cover'
            style={{ boxShadow: "0px 30px 40px -25px rgba(0, 0, 0, 0.75)" }}
            alt={title}
            src={mainImage}
          />
        </div>
        <div className='flex flex-col justify-around w-full mt-4 lg:mt-0 lg:w-9/12 lg:pl-12'>
          <h1 className='w-full text-center lg:text-left text-2xl font-bold text-kb_dark'>
            {title}
          </h1>
          <p className='font-extralight'>{formattedDesc}</p>
          <button
            aria-label='Les Mer'
            onClick={cb}
            className='w-20 h-12 bg-kb_blue text-kb_white mt-4 self-center lg:mt-0 lg:self-baseline'
          >
            Les mer
          </button>
        </div>
      </article>
      <hr className='text-kb_hr border-1' />
    </>
  );
};

export default PreviewProject;
