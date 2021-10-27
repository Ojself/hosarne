import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "./Dropdown";
/* import { SocialIcon } from "react-social-icons"; */
/* import logo_plain from "../imgs/kb_logo_light.png"; */
import get_in_touch_arrow from "../imgs/get_in_touch_icon.png";

const navLinkStyle =
  "uppercase inline-flex items-center py-3 px-3 my-6 rounded";

const navs = [
  "kontakt oss",
  "ansatte",
  "prosjekter",
  "historie",
  "tjenester",
  "sertifiseringer",
  /* "maskinpark" */
  /* "nyheter", */
];

const NavBar = () => {
  return (
    <header className='z-50 h-20 bg-kb_light sticky top-0 lg:h-24'>
      <nav className='w-full flex h-full flex-row justify-between'>
        <div className='flex h-full items-center w-1/3 ml-4 lg:ml-0 lg:w-1/6 lg:justify-center'>
          <NavLink className='' to='/'>
            <h1 className='text-kb_blue font-bold italic align-middle text-lg lg:text-3xl'>
              Knut Bjerke AS
            </h1>
          </NavLink>
        </div>
        <div className='hidden lg:flex justify-around w-1/2'>
          {navs.map((nav) => {
            const formattedNav = nav.split(" ")[0];
            return (
              <NavLink
                style={{ textUnderlineOffset: "10px" }}
                key={nav}
                activeClassName='underline text-kb_blue'
                to={`/${formattedNav}`}
                className={navLinkStyle + " font-light"}
              >
                {nav}
              </NavLink>
            );
          })}
        </div>
        <div className='hidden lg:flex w-1/7'>
          <NavLink
            to='/kontakt'
            className='flex container bg-kb_yellow p-5 h-full w-100 items-center'
          >
            <p className=''>GET IN TOUCH </p>
            <img
              width='19'
              height='11'
              className='ml-2 w-auto'
              src={get_in_touch_arrow}
              alt='Right facing arrow'
            />
          </NavLink>
        </div>

        <div className='flex items-center mr-5 p-0 lg:hidden'>
          <Dropdown navs={navs} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
