import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import PreviewProject from "../components/PreviewProject";
import SingleProject from "../components/SingleProject";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [singleProject, setSingleProject] = useState(null);
  useEffect(() => {
    const fetchSanityData = async () => {
      const data =
        await sanityClient.fetch(`*[_type == "projects"] | order(order asc){
                     title,
                     description,
                     order,
                     "images": images[]{
                      "url": asset->url,
                    }
                 }`);
      setProjectData(data);
    };
    fetchSanityData();
  }, []);

  const handleClick = (project) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSingleProject(project);
  };

  const shouldRenderAllProjets = projectData.length && !singleProject;
  const shouldRenderSingleProject = projectData.length && !!singleProject;
  return (
    <main className='min-h-screen flex flex-col items-center pt-12'>
      <section className='flex flex-col w-4/5 lg:w-1/2 pt-12'>
        {!!shouldRenderAllProjets && (
          <>
            <h1 className='text-kb_blue text-3xl font-bold'>Prosjekter</h1>
            {projectData.map((project) => {
              const { description, title } = project;
              const mainImage = project.images[0].url;
              return (
                <PreviewProject
                  key={title}
                  description={description}
                  mainImage={mainImage}
                  cb={() => handleClick(project)}
                  title={title}
                />
              );
            })}
          </>
        )}
        {!!shouldRenderSingleProject && (
          <SingleProject {...singleProject} cb={() => setSingleProject(null)} />
        )}
      </section>
    </main>
  );
};

export default Projects;
