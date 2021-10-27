import "./home.css";
import React from "react";
// import Card from "../components/Card";
import landingImage from "../imgs/door.webp";

const Home = () => {
  return (
    <main className="text-white relative ">
      <img src={landingImage} alt="front door" className="hero " />
      <div className="absolute top-8 left-8 lg:left-16">
        <h1
          className="font-bold text-xl lg:text-4xl"
          style={{
            color: "#548f6f",
            textShadow:
              "-1.25px 0 black, 0 1.25px black, 1.25px 0 black, 0 -1.25px black",
            textDecoration: "underline",
          }}
        >
          Leiligheten
        </h1>
        <p
          className="text-sm lg:text-xl"
          style={{
            color: "white",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          {" "}
          Lorem impsum{" "}
        </p>
      </div>
      <div className="absolute bottom-8 left-8 lg:left-16">
        <address className="font-bold text-xs lg:text-xl">
          Maria Katarina <br />
          41259913 <br />
          <a href="mailto:mariakatarinatm@gmail.com">
            mariakatarinatm@gmail.com
          </a>
        </address>
      </div>
      <div className="absolute top-8 right-8 lg:right-16">
        <h1
          className="font-bold text-xl lg:text-4xl"
          style={{
            color: "#3EB489",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            textDecoration: "underline",
          }}
        >
          Galleriet
        </h1>
        <p className="text-sm lg:text-xl"> Lorem impsum </p>
      </div>
      <div className="absolute bottom-8 right-8 lg:right-16">
        <address className="font-bold text-xs lg:text-xl">
          Cat <br />
          46427881 <br />
          <a href="mailto:cat@goteborggt27b.no">cat@goteborggt27b.no</a>
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
