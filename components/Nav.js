import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Sling as Hamburger } from 'hamburger-react';
import SideNav from './SideNav';

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
        } fixed w-full top-0 bg-nav text-gray-200 p-4  border-b-4 z-40`}>
        <div className='hidden md:block'>
          <div className='flex items-center space-x-6  max-w-5xl mx-auto'>
            <Links link='home'>home</Links>
            <Links link='about'>about</Links>
            <Links link='portfolio'>portfolio</Links>
            <Links link='contact'>contact</Links>
          </div>
        </div>
        <div className='md:hidden'>
          <div className='flex justify-end'>
            <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} size={28} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

export const Links = ({ link, children }) => {
  return (
    <Link
      className='uppercase cursor-pointer  transition duration-300 hover:text-primary tracking-widest px-4 py-2 text-sm '
      to={link}>
      {children}
    </Link>
  );
};
