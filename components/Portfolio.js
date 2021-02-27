import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import graphcms from '../graphql/client';
import { GET_ALL_PROJECTS, GET_PROJECT } from '../graphql/queries';
import ProjectDetail from './ProjectDetail';

const Portfolio = () => {
  const [loading, setLoading] = useState(false);
  const [projectSlug, setProjectSlug] = useState('');
  const [projectDetail, setProjectDetail] = useState({});
  const [showProject, setShowProject] = useState(false);
  const { data, isLoading, isError } = useQuery(['projects'], async () => {
    const { projects } = await graphcms.request(GET_ALL_PROJECTS);
    return projects;
  });

  // console.log(projectSlug);
  console.log(projectDetail);

  useEffect(() => {
    fetchProject();
  }, [projectSlug]);

  const fetchProject = async () => {
    setLoading(true);
    const { project } = await graphcms.request(GET_PROJECT, { slug: projectSlug });
    setProjectDetail(project);
    setLoading(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data...</p>;

  return (
    <>
      <Styles className='text-gray-800 bg-portfolio py-20 '>
        <h1 className='text-center uppercase md:text-3xl font-semibold tracking-widest mb-3'>
          Projects
        </h1>
        <div className='h-1 bg-gray-900 w-16 flex max-w-xs mx-auto mb-20'></div>
        <div className='md:grid grid-cols-3 max-w-6xl mx-auto gap-2'>
          {data.map((project) => {
            const { id, images, name, slug, description, skills, title } = project;
            return (
              <div className='project col-span-1 relative' key={id}>
                <img src={images[0].url} alt={name} />
                <div className='border-r-4 border-b-4 border-primary_1 overlay absolute shadow-lg bg-white top-0 right-0 left-0 bottom-0 p-5'>
                  <div className='mb-20'>
                    <h2 className='text-center mb-1 text-xl font-semibold tracking-wider text-gray-700'>
                      {title}
                    </h2>
                    <div className='flex justify-center space-x-2'>
                      {skills.map((skill, index) => (
                        <p className='text-sm text-primary' key={index}>
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div data-aos='fade-up' data-aos-duration='2000'>
                    <button
                      onClick={() => {
                        setProjectSlug(slug);
                        setShowProject(true);
                      }}
                      className='transition duration-500 ease-in-out flex items-center  max-w-md mx-auto border-2 py-2 px-10 border-primary_1 hover:bg-primary_1 hover:text-white focus:outline-none'>
                      View more
                    </button>
                  </div>
                </div>
                {showProject && (
                  <ProjectDetail
                    loading={loading}
                    data={data}
                    project={project}
                    slug={slug}
                    setShowProject={setShowProject}
                    projectDetail={projectDetail}
                    setProjectDetail={setProjectDetail}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Styles>
    </>
  );
};

export default Portfolio;

const Styles = styled.div`
  .overlay {
    display: none;
  }
  .project:hover .overlay {
    display: block;
  }
`;
