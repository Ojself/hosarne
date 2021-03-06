import React, { useEffect } from "react";
import { changeLayOutColors } from "../utils/helpers";

const Apartment = () => {
  useEffect(() => {
    changeLayOutColors("#fff");
  }, []);
  return (
    <main className='font-book'>
      <section className='flex flex-col lg:flex-row items-center justify-center'>
        <div className='w-4/5 lg:w-5/12'>
          <img alt='Galleriet front' src='https://picsum.photos/600/600' />
        </div>
        <div className='w-4/5 lg:w-5/12 flex flex-col justify-center'>
          <p className='mb-6'>
            Hos Arne er alle velkommen Hos Arne er det en hage Folk Hos Arne har
            glød Hos Arne er det et galleri Folk Hos Arne bry seg om krig og
            fred, og sånn Hos Arne er det en stue Folk Hos Arne har vi ingen
            svar men mange spørsmål. Hos Arne kan du gjøre hva du vil så lenge
            du er grei
          </p>
          <p className='italic'>
            At Arne’s, everyone is welcome At Arne’s there is a garden People at
            Arne’s have a glow At Arne’s there is a gallery People At Arne’s
            care about war and peace, and such At Arne’s there is a living room
            The people At Arne’s have no answers, but many questions. At Arne’s
            you can do whatever you want just be nice
          </p>
        </div>
      </section>
    </main>
  );
};

export default Apartment;
