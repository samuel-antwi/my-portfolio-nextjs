import Layout from '../components/Layout';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import styled from 'styled-components';
import Contact from '../components/Contact';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import graphcms from '../graphql/client';
import { GET_ALL_PROJECTS } from '../graphql/queries';
import { GradientStyle } from '../components/Nav';

const Home = ({ projects }) => {
  const [showDownArrow, setArrow] = useState(false);
  const [show, setShow] = useState(false);
  const [typewriter, setTypewriter] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setTypewriter(false);
    }, 6000);
  }, []);

  return (
    <Layout
      title='Samuel Antwi | Portfolio'
      description='Hello, welcome to my portfolio. My name is Samuel Antwi. I am a  front-end developer.'>
      <Background />
      <div className='home  text-gray-50  font-raleway absolute top-0 right-0 left-0 bottom-0'>
        <div className=' '>
          <div className='flex justify-center items-center justify-items-center inset-0 min-h-screen'>
            <div className=' text-center'>
              {typewriter && (
                <GradientStyle className=' md:text-3xl text-xl px-4 sm:relative absolute top-[25%] mb-10 font-futura'>
                  <Typewriter
                    options={{
                      strings: [' Welcome to my portfolio..'],
                      autoStart: true,
                      loop: false,
                    }}
                  />
                </GradientStyle>
              )}
              {show && (
                <motion.div initial={{ y: -500 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
                  <h3 className='mb-1 md:text-2xl text-xl  text-gray-200'>
                    Hello, my name is <span className='text-primary capitalize'>samuel antwi.</span>
                  </h3>
                  <h3 className='mb-5  md:text-2xl text-xl text-gray-200'>
                    I'm a Front End Developer.
                  </h3>
                  <Styles>
                    <Link
                      to='about'
                      className='mr-1 md:text-lg text-base '
                      onMouseOver={() => setArrow(true)}
                      onMouseLeave={() => setArrow(false)}
                      className=' flex items-center justify-center xs:text-base text-sm justify-items-center xs:w-48 w-40 mx-auto border-2 p-2 border-secondary   text-white capitalize '>
                      View my work
                      {showDownArrow ? (
                        <BsArrowDown className='ml-3' />
                      ) : (
                        <BsArrowRight className='ml-3' />
                      )}
                    </Link>
                  </Styles>
                </motion.div>
              )}
              {!show && (
                <motion.div initial={{ y: 500 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
                  <h3 className='mb-1  md:text-2xl text-xl '>
                    Hello, my name is <span className='text-primary capitalize'>samuel antwi.</span>
                  </h3>
                  <h3 className='mb-5  md:text-2xl text-xl '>I'm a Front End Developer.</h3>
                  <Styles>
                    <Link
                      to='about'
                      className='mr-1 md:text-lg text-base '
                      onMouseOver={() => setArrow(true)}
                      onMouseLeave={() => setArrow(false)}
                      className=' flex items-center justify-center xs:text-base text-sm justify-items-center xs:w-48 w-40 mx-auto border-2 p-2 border-secondary   text-white capitalize '>
                      View my work
                      {showDownArrow ? (
                        <BsArrowDown className='ml-3' />
                      ) : (
                        <BsArrowRight className='ml-3' />
                      )}
                    </Link>
                  </Styles>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <About />
      <Portfolio projects={projects} />
      <Contact />
      <hr />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { projects } = await graphcms.request(GET_ALL_PROJECTS);

  return {
    props: {
      projects,
    },
  };
};

const Styles = styled.div`
  a {
    background: linear-gradient(to right, #11ccc9 50%, #252a35 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    &:hover {
      background-position: left bottom;
      border: #252a35;
      cursor: pointer;
    }
  }
`;
