import Layout from '../components/Layout';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import Particles from 'react-tsparticles';
import { useState } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

export default function Home() {
  const [showDownArrow, setArrow] = useState(false);
  return (
    <Layout>
      <div className='min-h-screen text-gray-50 bg-primary '>
        <div className='container mx-auto '>
          <div className='flex justify-center items-center justify-items-center inset-0 min-h-screen'>
            <div>
              <div className='md:text-5xl text-2xl text-center'>
                <h3 className='mb-1'>
                  Hello, I'm <span className='text-primary capitalize'>samuel antwi.</span>
                </h3>
                <h3 className='mb-5'>I'm a Front-end developer.</h3>
              </div>
              <button
                onMouseOver={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                className='transition duration-500 ease-in-out flex items-center max-w-xs mx-auto border-2 py-2 px-5  text-white capitalize hover:bg-secondary hover:border-secondary'>
                <span className='mr-1 md:text-lg text-base'>View my work</span>
                {showDownArrow ? <BsArrowDown /> : <BsArrowRight />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <About />
      <Portfolio />
    </Layout>
  );
}
