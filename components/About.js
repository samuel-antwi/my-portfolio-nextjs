import { ImAlarm, ImRocket } from 'react-icons/im';
import { GiAerodynamicHarpoon } from 'react-icons/gi';
import { FaLaptop, FaMobile, FaRegLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className='min-h-screen text-gray-700'>
      <div className='py-20'>
        <h1 className='text-center uppercase md:text-3xl font-semibold tracking-widest mb-3'>
          About
        </h1>
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className='h-1 bg-gray-900 w-10 flex max-w-xs mx-auto'></motion.div>
        <section className='sm:grid md:grid-cols-4 sm:grid-cols-2 max-w-5xl mx-auto py-20 gap-5'>
          <div className='col-span-1 text-center flex flex-col justify-center justify-items-center items-center'>
            <div className='h-24 w-24 mb-3 rounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center justify-items-center items-center'>
              <div className='relative'>
                <FaLaptop size={50} className='text-gray-100' />
                <FaMobile size={25} className='text-gray-100 absolute top-0 left-8' />
              </div>
            </div>
            <h1 className='mb-2 md:text-2xl font-semibold text-gray-600 tracking-wider'>
              Responvie
            </h1>
            <p className='text-gray-500'>My layouts will work on any device, big or small..</p>
          </div>
          <div className='col-span-1 text-center flex flex-col justify-center justify-items-center items-center'>
            <div className='h-24 w-24 mb-3 rounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center justify-items-center items-center'>
              <div>
                <ImAlarm size={50} className='text-gray-100' />
              </div>
            </div>
            <h1 className='mb-2 md:text-2xl font-semibold text-gray-600 tracking-wider'>Fast</h1>
            <p className='text-gray-500'>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className='col-span-1 text-center flex flex-col justify-center justify-items-center items-center'>
            <div className='h-24 w-24 mb-3 rounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center justify-items-center items-center'>
              <div>
                <FaRegLightbulb size={50} className='text-gray-100' />
              </div>
            </div>
            <h1 className='mb-2 md:text-2xl font-semibold text-gray-600 tracking-wider'>
              Intuitive
            </h1>
            <p className='text-gray-500'>
              Strong preference for easy to use, intuitive UX/UI. Dynamic .
            </p>
          </div>
          <div className='col-span-1 text-center flex flex-col justify-center justify-items-center items-center'>
            <div className='h-24 w-24 mb-3 rounded-tl-3xl rounded-br-3xlrounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center justify-items-center items-center'>
              <div>
                <ImRocket size={50} className='text-gray-100' />
              </div>
            </div>
            <h1 className='mb-2 md:text-2xl font-semibold text-gray-600 tracking-wider'>Dynamic</h1>
            <p className='text-gray-500'>
              Websites don't have to be static, I love making pages come to life..
            </p>
          </div>
        </section>
        <section className=''>
          <div className='max-w-6xl mx-auto'>
            <div className='md:grid grid-cols-5 gap-20'>
              <div className='col-span-2'>
                <Image
                  className=' mb-4 '
                  className='object-cover'
                  src={'/images/sam5.png'}
                  width={800}
                  height={980}
                />
                <h1 className='md:text-2xl font-medium mb-3 text-center'>Who am I?</h1>
                <p className='md:text-lg text-gray-600 text-center mb-1'>
                  I'm a Front-End Developer based in Mansfield, Nottinghamshire. My goal is to use
                  mordern stacks to build amazing web application that can have real positive impact
                  in people's life without compromising their experience.
                </p>
                <a
                  className='text-blue-400 hover:underline text-center block text-lg tracking-wider'
                  href='/'>
                  Let work together
                </a>
              </div>
              <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className='col-span-3 space-y-3'>
                <h1 className=' text-lg font-semibold tracking-wider'>Professional Skills</h1>
                <div className='html text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold '>HTML</span>
                  <span className='text-gray-700'> 80%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>CSS</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>JavaScript</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>React/Next</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>Headless CMS</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>Git</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>Jira</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>Scrum</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>Agile</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>Firebase</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
                <div className='css text-gray-100 px-2 py-1 flex justify-between'>
                  <span className='font-semibold tracking-wider'>GraphQL</span>
                  <span className='text-gray-700'> 70%</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
