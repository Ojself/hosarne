import "./home.css";
import React from "react";
// import Card from "../components/Card";
import landingImage from "../imgs/door.webp";

const Home = () => {
  return (
    <main className='text-white h-100 relative '>
      <img src={landingImage} alt='front door' className="object-cover w-full h-full" />
      <div className="absolute top-8 left-16">
        <h1 className="text-4xl font-bold">Leiligheten</h1>
        <p className="text-xl"> Lorem impsum </p></div>
      <div className="absolute bottom-8 left-16">
        <p className="text-xl font-bold">Lorem lorem.</p>
      </div>
      <div className="absolute top-8 right-16">
      <h1 className="text-4xl font-bold">Galleriet</h1>
      <p className="text-xl font-bold">Lorem lorem.</p>
      </div>
      <div className="absolute bottom-8 right-16">
        <p className="text-xl font-bold">Lorem lorem.</p>
      </div>
    </main>

  );
};

export default Home;
