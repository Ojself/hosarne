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
        <p className="text-xl"> Lorem impsum </p>
        </div>
      <div className="absolute bottom-8 left-16"> {/* bottom left */}
      <address className='text-xl font-bold'>
        Maria Katarina <br />
        41259913 <br />
        <a href="mailto:mariakatarinatm@gmail.com">mariakatarinatm@gmail.com</a>
      </address>





      </div>
      <div className="absolute top-8 right-16"> {/* top right */}
      <h1 className="text-4xl font-bold">Galleriet</h1>
      <p className="text-xl font-bold">Lorem lorem.</p>
      </div>
      <div className="absolute bottom-8 right-16"> {/* bottom right */}
      <address className='text-xl font-bold'>
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
