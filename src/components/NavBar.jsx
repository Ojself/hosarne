import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { handleMailChimp } from "../utils/mailchimp";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleError = (e) => {
    console.error(e);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 5000);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      handleMailChimp(email);
    } catch (e) {
      handleError(e);
    }
    setLoading(false);
  };
  console.log(loading);
  return (
    <header
      id='navbar'
      className='bg-white h-64 transition duration-1000 ease-in-out'
    >
      <nav className='w-full flex flex-row justify-around pt-12'>
        <div className='flex flex-col uppercase text-xl font-roman'>
          <NavLink className='mb-4 ' to='/'>
            Hos Arne
          </NavLink>
          <NavLink
            className={(isActive) => (isActive ? "" : "opacity-40")}
            to='/leiligheten'
          >
            Leiligheten
          </NavLink>
          <NavLink
            className={(isActive) => (isActive ? "" : "opacity-40")}
            to='/galleriet'
          >
            Galleriet
          </NavLink>
          <NavLink
            className={(isActive) => (isActive ? "" : "opacity-40")}
            to='/program'
          >
            Program
          </NavLink>
          <NavLink
            className={(isActive) => (isActive ? "" : "opacity-40")}
            to='/menneskene'
          >
            Menneskene
          </NavLink>
        </div>

        <div
          id='opening-hours'
          className='duration-1000 ease-in-out flex flex-col font-book'
        >
          <h4>Åpningstider:</h4>
          <h5>Leiligheten </h5>
          <p className='mb-4'> Se program. </p>

          <h5>Galleriet </h5>
          <p>
            Fre. / lør. / søn. (12:00-16:00) <br />
            Se program.
          </p>
        </div>
        <div
          id='adress'
          className='duration-1000 ease-in-out flex flex-col font-book'
        >
          <h1>Addresse:</h1>
          <address className='not-italic mb-4'>
            Gøteborggata 27B
            <br />
            0566 OSLO
            <br />
            <div className='flex flex-row justify-around'>
              <SocialIcon
                style={{ height: "2.5em" }}
                fgColor='#000'
                bgColor='#fff'
                url='https://www.instagram.com/hos_arne/'
              />
              <SocialIcon
                style={{ height: "2.5em" }}
                fgColor='#000'
                bgColor='#fff'
                url='https://www.facebook.com/hosarne'
              />
            </div>
          </address>

          <form onSubmit={handleSubmit}>
            <label>
              Nyhetsbrev: <br /> (Mail)
              <input
                type='text'
                id='email-input'
                className='duration-1000 ease-in-out ml-2 focus:border-green-500 outline-none border-black border-t-0 border-l-0 border-r-0 border-2 '
                value={email}
                onChange={handleChange}
              />
            </label>
            {error && <p className='text-red-700'> Noe gikk galt </p>}
            <br />
          </form>
        </div>
        <div>{/* empty by design lol */}</div>
        <div id='hos_arne-fixed' className='font-swhong text-6xl'>
          Hos Arne
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
