import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer
      id='footer'
      className='pt-6 flex h-60 w-full justify-around bg-white font-book text-lg'
    >
      <div className='uppercase'>Hos Arne</div>
      <div className='w-40'>
        <hr className='w-full mt-4 border-black ' />
      </div>
      <div className=''>
        Gøteborggata 27B <br />
        0655 Oslo
        <br />
        <br />
      </div>
      <div>
        <SocialIcon
          style={{ height: "2.5em" }}
          fgColor='#000'
          bgColor='transparent'
          url='https://www.instagram.com/hos-arne/'
        />
        <SocialIcon
          className=''
          id='fb-icon'
          style={{ height: "2.5em" }}
          fgColor='#000'
          bgColor='transparent'
          url='https://www.facebook.com/hosarne'
        />
      </div>
      <div className=''>
        MK / Daglig leder <br />
        mk@hos-arne.no <br />
        +47 12345678 <br />
      </div>
      <div className=''>
        Cat / Gallerist & kurator
        <br />
        cat@hos-arne.no
        <br />
        +47 46427881
        <br />
      </div>
      <div className=''>
        Alex / Åndelig veileder
        <br />
        alex@hos-arne.no
        <br />
        +47 12345678
      </div>
    </footer>
  );
};

export default Footer;
