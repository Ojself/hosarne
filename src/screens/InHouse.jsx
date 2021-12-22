import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import PhotographerPreview from "../components/PhotographerPreview";
import colorPalette from "../utils/photographerPalette";

import { changeLayOutColors } from "../utils/helpers";
const InHouse = () => {
  const [photographers, setPhotographers] = useState([
    { name: "anthony", title: "Fotograf", slug: { current: "anthony" } },
    { name: "Yen", title: "Biolog", slug: { current: "yen" } },
    { name: "Thor", title: "Utvikler", slug: { current: "thor" } },
  ]);

  const randomStart = Math.floor(Math.random() * colorPalette.length);

  useEffect(() => {
    changeLayOutColors("#fff");

    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "photographer"] | order(order asc){
                       name,
                       title,
                       email,
                       mobile,
                       body,
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
    //fetchSanityData();
  }, []);

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
