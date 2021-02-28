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
        <section className='grid md:grid-cols-4 grid-cols-2 md:max-w-5xl mx-auto py-20 gap-5 space-y-4 md:space-y-0 px-6'>
          <div className='col-span-1 text-center flex flex-col justify-center justify-items-center items-center'>
            <div
              data-aos='slide-right'
              data-aos-duration='1000'
              className='h-24 w-24 mb-3 rounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center justify-items-center items-center'>
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
            <div
              data-aos='slide-down'
              data-aos-duration='1000'
              className='h-24 w-24 mb-3 rounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center justify-items-center items-center'>
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
            <div
              data-aos='slide-up'
              data-aos-duration='1000'
              className='h-24 w-24 mb-3 rounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center justify-items-center items-center'>
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
            <div
              data-aos='slide-left'
              data-aos-duration='1000'
              className='h-24 w-24 mb-3 rounded-tl-3xl rounded-br-3xlrounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center justify-items-center items-center'>
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
                <motion.div
                  ref={ref}
                  animate={controls}
                  initial='hidden'
                  transition={{ duration: 0.8 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}>
                  <Image
                    className=' mb-4 '
                    className='object-cover'
                    src={'/images/sam5.png'}
                    width={800}
                    height={980}
                  />
                </motion.div>
                <h1 className='md:text-2xl font-medium mb-3 text-center px-8'>Who am I?</h1>
                <p className='md:text-lg text-gray-600 text-center mb-1 px-8 md:px-0'>
                  I'm a Front-End Developer based in Mansfield, Nottinghamshire. My goal is to use
                  mordern stacks to build amazing web application that can have real positive impact
                  in people's life without compromising their experience.
                </p>
                <a
                  className='text-blue-400 hover:underline text-center block text-lg tracking-wider mb-10'
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
                className='col-span-3 space-y-3 px-8'>
                <h1 className=' text-lg font-semibold tracking-wider'>Professional Skills</h1>
                <Skill skill='HTML' level='80%' className='html' />
                <Skill skill='CSS' level='75%' className='css' />
                <Skill skill='React/Next' level='75%' className='css' />
                <Skill skill='Headless CMS' level='75%' className='css' />
                <Skill skill='Git' level='75%' className='css' />
                <Skill skill='Jira' level='75%' className='css' />
                <Skill skill='Scrum' level='75%' className='css' />
                <Skill skill='Agile' level='75%' className='css' />
                <Skill skill='Firebase' level='75%' className='css' />
                <Skill skill='GraphQL' level='75%' className='css' />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

export const Skill = ({ skill, level, className }) => {
  return (
    <div className={`${className} text-gray-100 px-2 py-1 flex justify-between`}>
      <span className='font-semibold tracking-wider'>{skill}</span>
      <span className='text-gray-700'> {level}</span>
    </div>
  );
};
