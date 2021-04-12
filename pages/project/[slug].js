import styled from 'styled-components';
import graphcms from '../../graphql/client';
import { GET_ALL_PROJECTS, GET_PROJECT } from '../../graphql/queries';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useRouter, Router } from 'next/router';

const Project = ({ project }) => {
  const { images, title, projectDescription, links, skills } = project;

  const router = useRouter();

  return (
    <Styles>
      <div className='font-raleway text-gray-100 overflow-x-hidden'>
        <button
          aria-label='close'
          onClick={() => router.back('/')}
          className='absolute top-5 right-5 z-20  text-gray-400 md:text-5xl text-3xl'>
          <MdClose />
        </button>
        <div className='flex min-h-screen'>
          <div className='max-w-6xl m-auto'>
            <h1
              className=' md:mb-28 md:pt-5 pt-20 text-2xl uppercase md:text-4xl font text-gray-300 text-center'
              // className='animate-bounce md:mb-28 md:pt-5 pt-20 text-2xl uppercase md:text-4xl font text-gray-300 text-center'
            >
              {title}
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 bg-primary'>
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className='col-span-1 md:-mt-24 project__links  '>
                <img src={images[0].url} alt={title} alt={title} />
              </motion.div>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className='col-span-1 '>
                <div className='flex flex-col h-full'>
                  <div className='m-auto md:py-20 p-6'>
                    <p className='text-md mb-8 font-raleway tracking-wide text-gray-400 '>
                      {projectDescription}
                    </p>
                    <h3 className='py-3 text-lg'>Stack:</h3>
                    <div className=' py-1 text-sm mb-10'>
                      {skills.map((skill, index) => (
                        <span
                          className='inline-block tracking-wider md:inline skill mr-3 p-3 rounded-full text-primary mb-3'
                          key={index}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className='  project__links space-x-2  flex items-center justify-between'>
                      <a
                        className=' px-5 rounded-full py-2 text-gray-800 xs:text-base text-xs hover:text-gray-200'
                        href={links[0]}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Live Demo
                      </a>
                      {title !== 'Virtual peer' && (
                        <a
                          className='px-5 rounded-full text-gray-800 py-2 xs:text-base text-xs hover:text-gray-200'
                          href={links[1]}
                          target='_blank'
                          rel='noopener noreferrer'>
                          Code on Github
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Project;

export const getStaticPaths = async () => {
  const { projects } = await graphcms.request(GET_ALL_PROJECTS);
  return {
    paths: projects.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { project } = await graphcms.request(GET_PROJECT, { slug: params.slug });
  return {
    props: {
      project,
    },
  };
};

const Styles = styled.div`
  /* Modal style */
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  top: 0;
  left: 0;
  transform: scale(0);
  transform: scaleY(0.01) scaleX(0);
  animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  .modal-background {
    .modal {
      transform: scale(0);
      animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }
  &.out {
    transform: scale(1);
    animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    .modal-background {
      .modal {
        animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
  }

  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }

  @keyframes unfoldOut {
    0% {
      transform: scaleY(1) scaleX(1);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(0.005) scaleX(0);
    }
  }

  /* end of modal style */

  .project__details h3 {
    color: #404ece;
    letter-spacing: 3px;
  }

  .skill {
    background: #181818;
  }

  .project__links a {
    background: linear-gradient(to right, #e31c6d 50%, #11ccc9 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
  }
  .project__links a:hover {
    background-position: left bottom;
  }
`;
