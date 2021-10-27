import React from "react";

const SingleProject = ({ images, title, description, cb }) => {
  return (
    <main className='mb-24'>
      <h1
        onClick={cb}
        className='cursor-pointer text-kb_blue text-3xl font-bold my-4'
      >
        {"<"} Tilbake
      </h1>
      <div className='w-full my-4'>
        {images.map((image) => (
          <a key={image.url} target='_blank' href={image.url} rel='noreferrer'>
            <img
              className='h-auto w-100 object-cover'
              src={image.url}
              alt={`${title} hovedbilde`}
            />
          </a>
        ))}
      </div>
      <h1 className='text-4xl font-semibold text-kb_dark mt-2'>{title}</h1>
      <p className='text-kb_gray text-lg'>{description}</p>
    </main>
  );
};

export default SingleProject;
