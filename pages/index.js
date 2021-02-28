import Layout from '../components/Layout';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import Particles from 'react-tsparticles';
import { useState } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import styled from 'styled-components';

export default function Home() {
  const [showDownArrow, setArrow] = useState(false);
  return (
    <Layout>
      <div className='min-h-screen text-gray-50 bg-primary font-raleway '>
        <div className='container mx-auto '>
          <div className='flex justify-center items-center justify-items-center inset-0 min-h-screen'>
            <div>
              <div className='md:text-4xl text-2xl text-center'>
                <h3 className='mb-1'>
                  Hello, I'm <span className='text-primary capitalize'>samuel antwi.</span>
                </h3>
                <h3 className='mb-5'>I'm a Front-end developer.</h3>
              </div>
              <Button
                onMouseOver={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                className=' flex items-center justify-center justify-items-center w-48 mx-auto  border-2 p-2   text-white capitalize '>
                <span className='mr-1 md:text-lg text-base'>View my work</span>
                {showDownArrow ? <BsArrowDown /> : <BsArrowRight />}
              </Button>
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
}

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
