import { ImAlarm, ImRocket } from 'react-icons/im';
import { FaLaptop, FaRegLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { MdPlayArrow } from 'react-icons/md';
import { FaHandsHelping } from 'react-icons/fa';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Styles className='about font-raleway min-h-screen bg-primary py-20 text-gray-200'>
      <div className='pb-20'>
        <h1 className='text-center uppercase md:text-3xl text-xl font-semibold tracking-widest mb-3'>
          About
        </h1>
        <div className='h-1 bg-gray-200 w-10 flex max-w-xs mx-auto'></div>
      </div>
      <section className='grid md:grid-cols-4 grid-cols-2 md:mb-20 mb-10  md:max-w-5xl mx-auto  gap-10 px-4'>
        <SkillsGrid
          icon={<FaLaptop size={50} />}
          title='Responsive'
          description=" We are not in 90's. Don't pay extra for responsive website."
        />
        <SkillsGrid
          icon={<ImAlarm size={50} />}
          title='Fast'
          description='Fast load times. This is the reason I love NextJS'
        />
        <SkillsGrid
          icon={<FaRegLightbulb size={50} />}
          title='Intuitive'
          description='Strong preference for easy to use, intuitive UX/UI. Dynamic'
        />
        <SkillsGrid
          icon={<ImRocket size={50} />}
          title='Dynamic'
          description="Websites don't have to be static. My goal is to make pages come to life."
        />
      </section>
      <section className='lg:grid grid-cols-4 lg:px-0 xs:px-8 px-4 lg:gap-10 gap-5 max-w-4xl mx-auto'>
        <div data-aos='slide-right' data-aos-duration='1000' className='col-span-2'>
          <Image
            className='object-cover'
            src={'/images/sam5.png'}
            width={600}
            height={750}
            priority
            layout='responsive'
          />
        </div>
        <div data-aos='slide-left' data-aos-duration='1000' className='col-span-2 '>
          <h1 className='md:text-2xl text-lg tracking-wider  font-semibold text-secondary py-4'>
            Who am I?
          </h1>
          <div className='xs:text-lg text-sm text-gray-300  mb-1  tracking-wide font-raleway'>
            <p>
              I'm a Front-End Developer based in Mansfield, Nottinghamshire. My goal is to use
              mordern stacks to build amazing web application that can have real positive impact in
              people's life without compromising their experience.
            </p>
            <p>
              I have a genuine passion for tech and I always do my best to keep up with the latest
              technologies and tools that help frontend developers to build a fully-fledged web
              application.
            </p>
            <p>If I am not writing code, it means I am busy DJing. 💿 🎵</p>
            <div className='flex flex-wrap pt-3 '>
              <Skill skill='HTML' />
              <Skill skill='CSS' />
              <Skill skill='JavaScript' />
              <Skill skill='Recat/NextJS' />
              <Skill skill='Headless CMS' />
              <Skill skill='Firebase' />
              <Skill skill='REST' />
              <Skill skill='GraphQL' />
              <Skill skill='Responsive design' />
              <Skill skill='Git' />
              <Skill skill='Jira' />
              <Skill skill='Agile' />
            </div>
            <Link
              to='contact'
              className='cursor-pointer flex items-center pt-3   text-blue-400 hover:underline text-sm  xs:text-lg tracking-wider mb-10'>
              Let work together
              <FaHandsHelping className='ml-2' />
            </Link>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default About;

export const Skill = ({ skill }) => {
  return (
    <div className='flex items-center py-1 pr-2 '>
      <MdPlayArrow className='text-primary' />
      <p className='font-semibold tracking-wider text-sm'>{skill}</p>
    </div>
  );
};

const SkillsGrid = ({ title, description, icon }) => {
  return (
    <div className='text-center '>
      <div className='flex justify-center items-center'>
        <div className='sm:h-24 xs:w-24 h-20 w-20 mb-3 rounded-tl-3xl rounded-br-3xl bg-secondary flex justify-center items-center'>
          <div className='absolute text-gray-100'>{icon}</div>
        </div>
      </div>
      <h1 className='mb-2 md:text-2xl text-xl font-semibold text-gray-100 tracking-wider'>
        {title}
      </h1>
      <p className='text-gray-500  text-xs md:text-base'>{description}</p>
    </div>
  );
};

export const Styles = styled.div``;

// ref={ref}
//           animate={controls}
//           initial='hidden'
//           transition={{ duration: 0.8 }}
//           variants={{
//             visible: { opacity: 1, scale: 1 },
//             hidden: { opacity: 0, scale: 0 },
//           }}
