import "./home.css";
import React from "react";
import BigHeader from "../components/BigHeader";
import ContactInformation from "../components/ContactInformation";
import teamMembers from "../utils/teamMembers.json";

const Home = () => {
  return (
    <main className='text-white flex justify-center items-center hero '>
      <div style={{}} className='w-11/12 h-full  flex justify-around flex-col '>
        <div className='flex  justify-between'>
          <div className=''>
            <h1 className='swhong-font text-6xl '>Hos Arne</h1>
          </div>
          <address className='text-right'>
            GÖTEBORGGT. 27B
            <br />
            0566, OSLO
            <br />
            - <br />
            @GOTEBORGGT27B
          </address>
        </div>
        <div className='flex justify-between'>
          <BigHeader
            title='LEILIGHETEN'
            subTitle='The Apartment'
            alignedLeft={true}
          />
          <BigHeader
            title='GALLERIET'
            subTitle='The Gallery'
            alignedLeft={false}
          />
        </div>
        <div className='flex justify-between'>
          {teamMembers.map((member, i) => {
            return (
              <div key={member.name} className={``}>
                <ContactInformation {...member} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
