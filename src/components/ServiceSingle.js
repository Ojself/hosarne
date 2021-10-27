import React from "react";

const ServiceSingle = ({
  description,
  mainImage,
  serviceTitle,
  imageToRight,
}) => {
  const direction = imageToRight ? "flex-row-reverse" : "flex-row";
  const padding = imageToRight ? "pr-4" : "pl-4";
  const textDirection = imageToRight ? "text-right" : "text-left";

  return (
    <div className={`flex ${direction}  bg-kb_light h-auto w-100`}>
      <div className='w-1/2'>
        <img
          className='w-full h-full object-contain'
          src={mainImage.asset.url}
          alt={serviceTitle}
        />
      </div>
      <div className={`w-1/2 ${padding}`}>
        <h2
          className={`break-words text-kb_blue text-xl lg:text-3xl font-bold my-8 ${textDirection}`}
        >
          {serviceTitle}
        </h2>
        <p className={`text-kb_gray text-sm xl:text-lg ${textDirection}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceSingle;
