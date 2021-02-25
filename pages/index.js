import Layout from '../components/Layout';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import Particles from 'react-tsparticles';
import { useState } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';

export default function Home() {
  const [showDownArrow, setArrow] = useState(false);
  return (
    <Layout>
      <div className='min-h-screen text-gray-50 bg-primary '>
        <div className='container mx-auto '>
          <div className='flex justify-center items-center justify-items-center inset-0 min-h-screen'>
            <div className='text-5xl text-center'>
              <h3 className='mb-1'>
                Hello, I'm <span className='text-primary capitalize'>samuel antwi.</span>
              </h3>
              <h3 className='mb-5'>I'm a Front-end developer.</h3>
              <button
                onMouseOver={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                className='transition duration-500 ease-in-out flex items-center max-w-xs mx-auto border-2 py-2 px-5 text-lg tracking-wider text-white capitalize hover:bg-secondary hover:border-secondary'>
                <span className='mr-1'>View my work</span>
                {showDownArrow ? <BsArrowDown /> : <BsArrowRight />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <About />
    </Layout>
  );
}

{
  /* <Particles
        id='tsparticles'
        options={{
          background: {
            color: {
              value: '#252a35',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 80,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.8,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1200,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      /> */
}
