import React from "react";

const Footer = () => {
  return (
    <footer
      id='footer'
      className='transition duration-1000 ease-in-out flex h-60 w-full justify-around items-center bg-white font-book text-lg'
    >
      <div className='uppercase'>Hos Arne</div>
      <div className=''>
        Gøteborggata 27B <br />
        0655 Oslo
        <br />
        @hos_arne
        <br />
      </div>
      <div className=''>
        Maria Katharina / Daglig leder <br />
        mk@hos_arne.no <br />
        +47 12345678 <br />
      </div>
      <div className=''>
        Cat / Gallerist & kurator
        <br />
        cat@hos_arne.no
        <br />
        +47 46427881
        <br />
      </div>
      <div className=''>
        Alex / Åndelig veileder
        <br />
        alex@hos_arne.no
        <br />
        +47 12345678
      </div>
    </footer>
  );
};

export default Footer;
