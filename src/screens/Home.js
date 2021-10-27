import "./home.css";
import React from "react";
import Card from "../components/Card";
import cert1image from "../imgs/cert 1.png";
import cert2Image from "../imgs/cert 2.png";
import envImage from "../imgs/env.png";
import qualityImage from "../imgs/quality.png";
import hseImage from "../imgs/worker.png";

const Home = () => {
  return (
    <main className='bg-kb_light min-h-screen'>
      <section className='home-main-banner flex relative'>
        <div className='text-kb_white absolute w-4/5 top-24 left-12 lg:left-24 lg:w-2/5'>
          <p className='font-bold text-right lg:text-left leading-tight tracking-wide text-2xl lg:text-5xl'>
            GRAVING, SPRENGNING OG PROSJEKTERING OVER HELE ØSTLANDET
          </p>
          <div className='flex mt-6 justify-end lg:justify-start'>
            <img
              width='96'
              height='96'
              className='h-100 w-100 lg:w-100 lg:h-100'
              src={cert1image}
              alt='ansvarsrettsertifisering'
            />
            <img
              width='96'
              height='96'
              className='ml-3 h-100 w-100 lg:w-100 lg:h-100'
              src={cert2Image}
              alt='miljøfyrtårnsertifisering'
            />
          </div>
        </div>
      </section>
      <section
        style={{ minHeight: "70vh" }}
        className='flex justify-center items-center'
      >
        <div className='flex flex-col w-3/4 lg:w-1/3'>
          <div className='bg-kb_blue rounded self-start px-3 py-1'>
            <span className='text-kb_white '>VÅR VISJON</span>
          </div>
          <h1 className='text-3xl lg:text-4xl font-semibold text-kb_dark'>
            Med kontinuerlig utvikling jobber vi bedre og smartere
          </h1>
          <p className='text-kb_gray'>
            Knut Bjerke AS ble eteablert i 1958 og er i dag et av de større
            entrepenørselskapene innen grunnarbeider i Østfold og søndre del av
            Akershus.
            <br />
            <br />
            Vi henvender oss for det meste mot det profesjonelle markedet med
            hovedvekt på kommunalteknisk anlegg, VVA arbeider og grunnarbeider
            for næringsbygg og offentlige bygg, infrastruktur for boligfelt. Vi
            kan vise til en rekke store og prestisjefulle oppdrag på vår
            referanseliste
          </p>
        </div>
      </section>
      <section className='bg-kb_blue flex flex-col items-center h-auto w-full '>
        <h1 className='text-3xl w-full text-center text-kb_white font-bold mb-16 mt-20 lg:mt-28 '>
          VÅRE VERDIER
        </h1>
        <div className='h-100 flex flex-col mb-24 w-full justify-between lg:flex-row lg:justify-around '>
          <Card
            imgSrc={envImage}
            cardHeader='MILJØPOLICY OG MILJØMÅL'
            cardText={
              <>
                <p className='text-sm'>
                  Vi skal kontinuerlig bestrebe oss på å redusere
                  miljøbelastningen.
                </p>
                <ul className='list-inside list-disc text-sm'>
                  <li>
                    Dette for å redusere fotavtrykket i forhold til omsetningen.
                    Det viktigste er å redusere transportmengden.
                  </li>
                </ul>
                <p className='text-sm'>
                  Vi skal overholde alle myndighetskrav som gjelder for firmaet.
                </p>
                <ul className='list-inside list-disc text-sm'>
                  <li>Dette er lovpålagt.</li>
                </ul>
                <p className='text-sm'>
                  Vi skal bestrebe oss på å reduser miljøbelastningene, utover
                  myndighetskravene.
                </p>
                <ul className='list-inside list-disc text-sm'>
                  <li>
                    Igjen redusere transportmengden, og forbruk av fossilt
                    brensel.
                  </li>
                </ul>
                <p className='text-sm'>
                  Vi skal alltid forbedre miljøledelsessystemet for å forbedre
                  miljøprestasjonen.
                </p>
                <ul className='list-inside list-disc text-sm'>
                  <li>
                    Maskiner, biler og utstyr skal kontinuerlig fornyes, da
                    disse relativt sett forbruker mindre drivstoff.
                  </li>
                </ul>
              </>
            }
          />
          <Card
            imgSrc={qualityImage}
            cardHeader='KVALITETS&shy;POLITIKK'
            cardText={
              <>
                <p className='font-semibold'>
                  Vi skal gjennomføre våre prosjekter
                </p>
                <ul className='list-inside list-disc text-sm'>
                  <li>i samsvar med kundens krav og forventninger</li>
                  <li>kostnadseffektivt</li>
                  <li>ved alltid å følge gode etiske retningslinjer </li>
                  <li>ved å jobbe for kontinuerlig forbedring</li>
                </ul>
                <p className='font-semibold mt-5'>Våre overordnede mål er </p>
                <ul className='list-inside list-disc text-sm'>
                  <li>0 kvalitetsavvik </li>
                  <li>Fornøyde kunder </li>
                  <li>Avviksfri produksjon </li>
                  <li>Opprettholde og utvikle kompetansen </li>
                </ul>
              </>
            }
          />
          <Card
            imgSrc={hseImage}
            cardHeader='HMS-POLITIKK'
            cardText={
              <>
                <p>
                  God produksjon er sikker produksjon. Vårt overordnede HMS-mål
                  er 0 alvorlige skader og skader med fravær. Vi skal oppnå et
                  fullt forsvarlig arbeidsmiljø gjennom våre holdninger og
                  handlinger og en synlig ledelse.
                </p>
                <div className='flex flex-col text-xs mt-2'>
                  <p className='font-semibold '>Holdninger:</p>
                  <ul className='list-inside list-disc'>
                    <li>
                      Vi bidrar med engasjement og innsats, ikke med liv og
                      helse.
                    </li>
                    <li>HMS skal være førsteprioritet i ethvert prosjekt</li>
                    <li>
                      Produksjon på bekostning av sikkerheten til arbeidstakerne
                      skal aldri forekomme.
                    </li>
                    <li>
                      Ingen jobb er så viktig at den ikke kan utføres sikkert.
                    </li>
                    <li>
                      Vi rapporterer måloppnåelse og avvik for læring og
                      kontinuerlig forbedring
                    </li>
                  </ul>
                  <p className='font-semibold mt-2'>Handlinger:</p>
                  <ul className='list-inside list-disc'>
                    <li>
                      Vi gjør det vi kan for å unngå skader og uønskede
                      hendelser.
                    </li>
                    <li>
                      I vår produksjon må vi søke og gjenskape forutsetningene
                      for god sikkerhet hver dag.
                    </li>
                    <li>
                      God HMS forutsetter involvering og godt samspill mellom
                      alle på og rundt prosjektene
                    </li>
                    <li>
                      Vi sier ifra når vi oppdager situasjoner som kan medføre
                      skade.
                    </li>
                    <li>
                      Vi kjenner og etterlever lover, regler og for læring og
                      kontinuerlig forbedring. andre krav.
                    </li>
                  </ul>
                </div>
              </>
            }
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
