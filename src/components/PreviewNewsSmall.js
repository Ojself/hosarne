import React from "react";
import { Link } from "react-router-dom";

const PreviewNewsSmall = ({ img, title, text, slug }) => {
  return (
    <article className="w-full flex flex-row mb-4">
      <img
        className=""
        src="https://picsum.photos/100/100"
        alt="Background Unsplash"
      />
      <div className="ml-2 flex flex-col ">
        <h1 className="text-kb_gray text-xl font-bold ">{title}</h1>
        <p className="text-kb_gray">{text}</p>
        <Link className="text-kb_blue font-bold mt-auto" to="/">
          Les mer...
        </Link>
      </div>
    </article>
  );
};

export default PreviewNewsSmall;
