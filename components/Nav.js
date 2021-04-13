import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Sling as Hamburger } from 'hamburger-react';
import SideNav from './SideNav';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    isOpen ? window.scrollTo(0, 0) : null;
  }, [isOpen]);

  return (
    <>
      <SideNav isOpen={isOpen} setOpen={setOpen} />
      <div
        className={` ${
          isOpen ? 'border-primary_1' : ' border-secondary'
        } fixed w-full top-0 bg-nav text-gray-200 py-4 md:px-10 px-4  border-b-4 z-40`}>
        <div className='flex items-center max-w-4xl justify-between'>
          <Link href='/'>
            <a>
              <GradientStyle className=' gradient__text hidden md:block  uppercase tracking-widest font-semibold'>
                samuel antwi
              </GradientStyle>
            </a>
          </Link>
          <div className='hidden md:block'>
            <div className='flex items-center space-x-6  max-w-5xl mx-auto'>
              <Links link='home'>home</Links>
              <Links link='about'>about</Links>
              <Links link='portfolio'>portfolio</Links>
              <Links link='contact'>contact</Links>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <a>
              <GradientStyle className=' gradient__text md:hidden uppercase tracking-widest font-semibold'>
                samuel antwi
              </GradientStyle>
            </a>
          </Link>
          <div className='md:hidden'>
            <div className='flex justify-end'>
              <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} size={28} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

export const Links = ({ link, children }) => {
  return (
    <ScrollLink
      className='uppercase cursor-pointer transition duration-300 hover:text-primary tracking-widest px-4 py-2 text-sm '
      to={link}>
      {children}
    </ScrollLink>
  );
};

export const GradientStyle = styled.div`
background-color: #CA4246;
  
  /* Create the gradient. */
   background-image: linear-gradient(
        45deg,
        #CA4246 16.666%, 
        #E16541 16.666%, 
        #E16541 33.333%, 
        #F18F43 33.333%, 
        #F18F43 50%, 
        #8B9862 50%, 
        #8B9862 66.666%, 
        #476098 66.666%, 
        #476098 83.333%, 
        #A7489B 83.333%);
  
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  
  /* Animate the text when loading the element. */
    /* This animates it on page load and when hovering out. */
    animation: rainbow-text-simple-animation-rev 0.75s ease forwards;

}

.gradient-text:hover{
    animation: rainbow-text-simple-animation 0.5s ease-in forwards;
}


/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-simple-animation-rev {
    0% {
        background-size: 650%;
    }
    40% {
        background-size: 650%;
    }
    100% {
        background-size: 100%;
    }
}

/* Move the background and make it larger. */
/* Animation shown when hovering over the text. */
@keyframes rainbow-text-simple-animation {
    0% {
        background-size: 100%;
    }
    80% {
        background-size: 650%;
    }
    100% {
        background-size: 650%;
    } 
`;
