import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import { changeLayOutColors } from "../utils/helpers";
/* TODO */
/* TODO */
/* TODO */

/* difference between no photographer and loading */
/* ? */

const Photographer = ({}) => {
  const [photographer, setPhotographer] = useState([]);
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

  useEffect(() => {
    changeLayOutColors("#fff");

    const fetchSanityData = async () => {
      const query = `*[_type == "photographer" && slug.current == $slug] | order(order asc){
                       name,
                       title,
                       email,
                       mobile,
                       slug,
                       body,
                       images[]{
                         asset->{
                            _id,
                            order,
                            url
                         },
                         title
                       },
                       image{
                           asset->{
                               _id,
                               order,
                               url
                           },
                           alt
                       }
                   }`;
      const params = { slug };
      const data = await sanityClient.fetch(query, params);
      setPhotographer(data);
    };
    fetchSanityData();
  }, []);
  if (!photographer.length) {
    return <div>Loading...</div>;
  }
  const { name, title, email, mobile, body, image, images } = photographer[0];
  console.log({ images });

  return (
    <div className='flex flex-col'>
      <h1>{name}</h1>
      <h1>{title}</h1>
      <h1>{email}</h1>
      <h1>{mobile}</h1>
      <div>
        <img src={image.asset.url} alt={image.alt} />
      </div>
      <BlockContent
        className='font-extralight'
        blocks={body}
        renderContainerOnSingleChild={true}
      />
      <div>
        {images.map((image) => {
          console.log(image);
          return <img src={image.asset.url} alt={image.alt} />;
        })}
      </div>
    </div>
  );
};

export default Photographer;
