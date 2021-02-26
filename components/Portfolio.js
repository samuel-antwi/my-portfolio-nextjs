import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import graphcms from '../graphql/client';
import { GET_ALL_PROJECTS } from '../graphql/queries';

const Portfolio = () => {
  const [showOverlay, setOverlay] = useState(false);
  const { data, isLoading, isError } = useQuery(['projects'], async () => {
    const { projects } = await graphcms.request(GET_ALL_PROJECTS);
    return projects;
  });

  const toggleOverlay = (id) => {
    if (data.find((product) => product.id === id)) {
      return true;
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Styles className='text-gray-800 bg-portfolio py-20'>
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
              <div className='overlay absolute shadow-lg bg-white top-0 right-0 left-0 bottom-0 p-5'>
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  className='mb-20'>
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
                </motion.div>
                <motion.div initial={{ y: 500 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
                  <button className='transition duration-500 ease-in-out flex items-center  max-w-md mx-auto border-2 py-2 px-10 border-primary_1 hover:bg-primary_1 hover:text-white'>
                    View more
                  </button>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </Styles>
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
