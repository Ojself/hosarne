import "./home.css";
import React from "react";
// import Card from "../components/Card";
import landingImage from "../imgs/door.webp";

const textShadow = {
  textShadow:
    "-1.25px 0 black, 0 1.25px black, 1.25px 0 black, 0 -1.25px black",
};

const Home = () => {
  return (
    <main className='text-white relative'>
      <img src={landingImage} alt='front door' className='hero ' />
      <div className='absolute top-16 left-16 lg:left-32'>
        <h1
          style={textShadow}
          className='font-bold text-xl lg:text-4xl underline '
        >
          LEILIGHETEN
        </h1>
        <p className='text-sm lg:text-xl'> Lorem impsum </p>
      </div>
      <div className='absolute bottom-16 left-8 lg:left-32'>
        <address className='font-bold text-xs lg:text-xl'>
          Maria Katarina <br />
          41259913 <br />
          <a href='mailto:mariakatarinatm@gmail.com'>
            mariakatarinatm@gmail.com
          </a>
        </address>
      </div>
      <div className='absolute top-16 right-16 lg:right-32'>
        <h1
          style={textShadow}
          className='font-bold text-xl lg:text-4xl underline'
        >
          GALLERIET
        </h1>
        <p className='text-sm lg:text-xl'> Lorem impsum </p>
      </div>
      <div className='absolute bottom-16 right-8 lg:right-32 text-right'>
        <address className='font-bold text-xs lg:text-xl'>
          Cat <br />
          46427881 <br />
          <a href='mailto:cat@goteborggt27b.no'>cat@goteborggt27b.no</a>
        </address>
      </div>
    </main>
  );
};

/* <p className="text-xl font-bold">Åndelig veileder,  Alex Lyngaas</p>
        <p className="text-xl font-bold">Daglig leder Maria Katarina T. Michelsen</p>
        <p className="text-xl font-bold">Kurator, Catharina Werring Otnes</p>
        <p className="text-xl font-bold">Investor Jan Erik Rivelsrud</p>
         */

export default Home;
