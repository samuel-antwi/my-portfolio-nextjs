import styled from 'styled-components'
import graphcms from '../../graphql/client'
import { GET_ALL_PROJECTS, GET_PROJECT } from '../../graphql/queries'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useRouter, Router } from 'next/router'
import Image from 'next/image'

const Project = ({ project }) => {
  const { images, title, projectDescription, links, skills } = project

  const router = useRouter()

  return (
    <Styles className='z-20'>
      <div className='text-gray-100 font-raleway'>
        <button
          aria-label='close'
          onClick={() => router.back('/')}
          className='absolute z-20 text-3xl text-gray-400 top-5 right-5 md:text-5xl'>
          <MdClose />
        </button>
        <div className='flex min-h-screen'>
          <div className='max-w-6xl m-auto'>
            <h1 className='pt-20 mb-10 text-2xl text-center text-gray-300 uppercase md:mb-28 md:pt-5 md:text-4xl font animate-bounce'>
              {title}
            </h1>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 bg-primary'>
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className='col-span-1 md:-mt-24 project__links '>
                <Image
                  className='object-cover'
                  src={images[0].url}
                  alt={title}
                  width={550}
                  height={350}
                  loading='eager'
                  priority={true}
                />
              </motion.div>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className='col-span-1 '>
                <div className='flex flex-col h-full'>
                  <div className='p-6 m-auto md:py-20'>
                    <p className='mb-8 tracking-wide text-gray-400 text-md font-raleway '>
                      {projectDescription}
                    </p>
                    <h3 className='py-3 text-lg'>Stack:</h3>
                    <div className='py-1 mb-10 text-sm '>
                      {skills.map((skill, index) => (
                        <span
                          className='inline-block p-3 mb-3 mr-3 tracking-wider rounded-full md:inline skill text-primary'
                          key={index}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className='flex items-center justify-between space-x-2 project__links'>
                      <a
                        className='px-5 py-2 text-xs text-gray-800 rounded-full xs:text-base hover:text-gray-200'
                        href={links[0]}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Live Demo
                      </a>
                      {title !== 'Virtual peer' && (
                        <a
                          className='px-5 py-2 text-xs text-gray-800 rounded-full xs:text-base hover:text-gray-200'
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
  )
}

export default Project

export const getStaticPaths = async () => {
  const { projects } = await graphcms.request(GET_ALL_PROJECTS)
  return {
    paths: projects.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { project } = await graphcms.request(GET_PROJECT, { slug: params.slug })
  return {
    props: {
      project,
    },
  }
}

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

  /* .title {
    animation: bounce infinite 1s linear;
  } */
`
