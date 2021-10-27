import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
const BlockContent = require("@sanity/block-content-to-react");

const NavButton = ({ buttonText, hide, cb }) => {
  const visibility = hide ? "invisible" : "visible";
  return (
    <button
      aria-label={buttonText}
      onClick={cb}
      className={`${visibility} bg-transparent text-kb_blue font-semibold py-2 px-4 mt-4 border rounded `}
    >
      {buttonText}
    </button>
  );
};

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  const changeYear = (increase) => {
    const currentIndex = historyData.findIndex((h) => h.year === selectedYear);
    const changedYear = increase
      ? historyData[currentIndex + 1].year
      : historyData[currentIndex - 1].year;
    setSelectedYear(changedYear);
  };

  const shouldHideButton = (boundary) => {
    const currentIndex = historyData.findIndex((h) => h.year === selectedYear);
    return currentIndex === boundary;
  };
  useEffect(() => {
    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "history"] | order(order asc){
                     title,
                     year,
                     body,
                     mainImage{
                         asset->{
                             _id,
                             url,
                         },
                         alt
                     }
                 }`);
      const sortedData = data.sort((a, b) => a.year - b.year);
      setSelectedYear(sortedData[0].year); // sets to first year.
      setHistoryData(sortedData);
    };
    fetchSanityData();
  }, []);
  const selectedHistory = historyData.find(
    (history) => history.year === selectedYear
  );
  return (
    <main className='bg-kb_white min-h-screen flex flex-col items-center mb-12'>
      <section className='flex flex-col w-4/5 lg:w-1/2 pt-12'>
        <h1 className='text-kb_blue text-3xl font-bold'>Historie</h1>
        <div className='flex flex-row my-4 flex-wrap'>
          {historyData.length
            ? historyData.map((history) => {
                const { year } = history;
                const coloring =
                  year === selectedYear
                    ? "bg-kb_blue text-kb_white font-bold "
                    : "bg-kb_light text-kb_blue";
                return (
                  <button
                    key={year}
                    aria-label={year}
                    onClick={() => setSelectedYear(year)}
                    className={`py-2 px-4 mr-1 mb w-16 lg:w-20 focus:outline-none transition duration-200 ${coloring}`}
                  >
                    {year}
                  </button>
                );
              })
            : null}
        </div>
      </section>
      <section className='w-4/5 lg:w-1/2'>
        {!!selectedHistory && (
          <div className='flex flex-col'>
            <h1 className='w-full text-2xl font-bold text-kb_dark'>
              {selectedHistory.title}
            </h1>
            <img
              alt={selectedHistory.title}
              src={selectedHistory.mainImage.asset.url}
            />
            <BlockContent
              className='font-extralight text-kb_gray rounded mt-4'
              blocks={selectedHistory.body}
              renderContainerOnSingleChild={true}
            />
          </div>
        )}
      </section>
      <section className='flex w-4/5 lg:w-1/2 justify-between'>
        <NavButton
          buttonText='Tidligere'
          hide={shouldHideButton(0)}
          cb={() => changeYear(false)}
        />
        <NavButton
          buttonText='Neste'
          hide={shouldHideButton(historyData.length - 1)}
          cb={() => changeYear(true)}
        />
      </section>
    </main>
  );
};

export default History;
