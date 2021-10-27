import React from "react";

const Card = ({ imgSrc, cardHeader, cardText }) => {
  return (
    <div className="rounded h-100 w-full bg-kb_white flex flex-col mb-6 p-6 lg:mb-0 lg:w-1/4 lg:p-12">
      <div className="flex flex-row h-1/6 mb-6">
        <div className="w-1/6">
          <img
            width="64"
            height="64"
            className="w-full h-auto"
            alt={`${cardHeader} logo`}
            src={imgSrc}
          />
        </div>
        <h1 className="w-5/6 text-3xl text-kb_dark font-bold text-center break-words">
          {cardHeader}
        </h1>
      </div>
      <div className="h-5/6 text-kb_gray font-light">{cardText}</div>
    </div>
  );
};

export default Card;
