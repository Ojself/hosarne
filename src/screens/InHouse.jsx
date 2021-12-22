import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import PhotographerPreview from "../components/PhotographerPreview";
import colorPalette from "../utils/photographerPalette";

import { changeLayOutColors } from "../utils/helpers";
const InHouse = () => {
  const [photographers, setPhotographers] = useState([]);

  const randomStart = Math.floor(Math.random() * colorPalette.length);

  useEffect(() => {
    changeLayOutColors("#fff");

    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "photographer"] | order(order asc){
                       name,
                       title,
                       slug,
                       image{
                           asset->{
                               _id,
                               order,
                               url
                           },
                           alt
                       }
                   }`);
      setPhotographers(data);
    };
    fetchSanityData();
  }, []);

  if (!photographers.length) {
    return <div>Loading...</div>;
  }

  return (
    <main className='flex flex-col items-center'>
      <div className='mt-6 flex flex-wrap w-full px-2 lg:px-0'>
        {photographers.map((photographer, i) => {
          const colorPaletteIndex = (randomStart + i) % colorPalette.length;
          return (
            <>
              <PhotographerPreview
                key={photographer.name}
                backgroundColor={
                  colorPalette[colorPaletteIndex].backgroundColor
                }
                color={colorPalette[colorPaletteIndex].color}
                photographer={photographer}
              />
            </>
          );
        })}
      </div>
    </main>
  );
};

export default InHouse;
