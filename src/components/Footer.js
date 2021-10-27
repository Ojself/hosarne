import React from "react";
import cert1 from "../imgs/cert 1.png";
import cert2 from "../imgs/cert 2.png";
import kblogo from "../imgs/logo_negative_big.png";

const Footer = () => {
  return (
    <footer className='flex h-60 w-full justify-around items-center bg-kb_dark'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='mb-1 lg:mr-1 lg:mb-0'>
          <img
            width='96'
            height='96'
            className='h-16 w-16 lg:w-24 lg:h-24'
            src={cert1}
            alt='ansvarsrettsertifisering'
          />
        </div>
        <div className='lg:ml-1'>
          <img
            width='96'
            height='96'
            className='h-16 w-16 lg:w-24 lg:h-24'
            src={cert2}
            alt='miljøfyrtårnsertifisering'
          />
        </div>
      </div>
      <div className='text-kb_white text-3xl font-semibold'>
        <img
          width='320'
          height='76'
          className='h-auto w-48 lg:w-96 lg:h-auto'
          src={kblogo}
          alt='Knut Bjerke Logo Negativ'
        />
      </div>
      <div className='text-kb_white'>
        <p className='font-bold text-base text-center lg:text-left lg:text-3xl'>
          69 28 99 33
        </p>
        <p className='text-xs lg:text-base font-light'>
          firmapost@knutbjerke.no
        </p>
      </div>
    </footer>
  );
};

export default Footer;
