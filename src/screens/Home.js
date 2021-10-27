import "./home.css";
import React from "react";
// import Card from "../components/Card";
import landingImage from "../imgs/door.webp";

const Home = () => {
  return (
    <main className='text-white h-100 relative '>
      <img src={landingImage} alt='front door' className="object-cover w-full h-full" />
      <div className="absolute top-8 left-16">
        <h1 className="text-4xl font-bold">Welcome to the Home of the Future</h1>
        <p className="text-xl"> We are a group of students who are passionate about the future of the world. We are here to help you find the best way to get there. </p></div>
      <div className="absolute bottom-8 left-16">
        <p className="text-4xl font-bold">We are here to help you find the best way to get there.</p>
      </div>
      <div className="absolute top-8 right-16">Top Right</div>
      <div className="absolute bottom-8 right-16">Bottom Right</div>
    </main>

  );
};

export default Home;
