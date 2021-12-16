import "./home.css";
import React, { useEffect } from "react";
import { changeLayOutColors } from "../utils/helpers";
const Home = () => {
  useEffect(() => {
    changeLayOutColors("#fff");
  }, []);
  return (
    <main className='text-white bg-black flex justify-center items-center hero '></main>
  );
};

export default Home;
