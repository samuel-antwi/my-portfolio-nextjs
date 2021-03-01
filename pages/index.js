import Layout from '../components/Layout';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import Particles from 'react-tsparticles';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import styled from 'styled-components';
import Contact from '../components/Contact';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Home = () => {
  const [showDownArrow, setArrow] = useState(false);
  const [show, setShow] = useState(false);
  const [typewriter, setTypewriter] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setTypewriter(false);
    }, 7000);
  }, []);

  return (
    <Layout>
      <div className='home  text-gray-50 bg-primary font-raleway'>
        <div className='container mx-auto '>
          <div className='flex justify-center items-center justify-items-center inset-0 min-h-screen'>
            <div>
              <div className='md:text-4xl text-2xl text-center'>
                {typewriter && (
                  <div className='text-gray-400'>
                    <Typewriter
                      options={{
                        strings: [' Thank you for visiting my portfolio..'],
                        autoStart: true,
                        loop: false,
                      }}
                    />
                  </div>
                )}
                {show && (
                  <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}>
                    <h3 className='mb-1'>
                      Hello, I'm <span className='text-primary capitalize'>samuel antwi.</span>
                    </h3>
                    <h3 className='mb-5'>I'm a Front-end developer.</h3>
                    <Button
                      onMouseOver={() => setArrow(true)}
                      onMouseLeave={() => setArrow(false)}
                      className=' flex items-center justify-center text-base justify-items-center w-48 mx-auto  border-2 p-2   text-white capitalize '>
                      <Link to='about' className='mr-1 md:text-lg text-base'>
                        View my work
                      </Link>
                      {showDownArrow ? <BsArrowDown /> : <BsArrowRight />}
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default Home;

const Button = styled.div`
  background: linear-gradient(to right, #11ccc9 50%, #252a35 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-position: left bottom;
    border: #252a35;
    cursor: pointer;
  }
`;
