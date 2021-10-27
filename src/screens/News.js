import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import PreviewNewsSmall from "../components/PreviewNewsSmall";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "news"] | order(order asc){
                     title,
                     slug,
                     mainImage{
                         asset->{
                             _id,
                             order,
                             url
                         },
                         alt
                     }
                 }`);
      setNewsData(data);
    };
    fetchSanityData();
  }, []);
  const mainArticle = newsData[0];
  const firstArticles = newsData.slice(1, 5);
  const remainingArticles = newsData.slice(5);
  return (
    <main className="min-h-screen w-full p-24 flex flex-col items-center">
      <section className="flex flex-col w-11/12 mb-12">
        <h1 className="text-kb_yellow text-3xl my-12 font-bold">Nyheter</h1>
        <div className="flex flex-row justify-between">
          <div style={{ width: "45%" }} className="">
            {mainArticle && (
              <article>
                <img
                  className="object-cover w-full h-full"
                  src="https://picsum.photos/800/200"
                  alt="Background Unsplash"
                />
                <h1 className="text-kb_gray text-xl font-bold my-8">
                  {mainArticle.title}
                </h1>
                <p className="text-kb_gray text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sit amet dignissim eros, viverra finibus nulla. Sed malesuada
                  a lectus vitae tempus. Sed at convallis augue. est eu luctus.
                </p>
                <button
                  aria-label="Les mer"
                  className="w-1/5 mt-6 h-12 bg-kb_blue text-kb_white"
                >
                  Les mer...
                </button>
              </article>
            )}
          </div>
          <div style={{ width: "45%" }} className="">
            {mainArticle && (
              <PreviewNewsSmall
                title="Fornyet Sentral godkjenning"
                text="Sentralt godkjent foretak for ansvarsrett etter plan- og bygningsloven"
              />
            )}
            {mainArticle && (
              <PreviewNewsSmall
                title="Fornyet Sentral godkjenning"
                text="Sentralt godkjent foretak for ansvarsrett etter plan- og bygningsloven"
              />
            )}
            {mainArticle && (
              <PreviewNewsSmall
                title="Fornyet Sentral godkjenning"
                text="Sentralt godkjent foretak for ansvarsrett etter plan- og bygningsloven"
              />
            )}
            {mainArticle && (
              <PreviewNewsSmall
                title="Fornyet Sentral godkjenning"
                text="Sentralt godkjent foretak for ansvarsrett etter plan- og bygningsloven"
              />
            )}
          </div>
        </div>
      </section>
      <hr className="text-kb_hr border-1 w-full" />

      <section className="flex flex-col w-11/12">
        <h1 className="text-kb_yellow text-3xl my-12 font-bold">Mer Nyheter</h1>
        <div className="grid grid-rows-2 grid-flow-col gap-4"></div>
      </section>
    </main>
  );
};

export default News;
