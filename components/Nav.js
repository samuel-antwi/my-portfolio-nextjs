import { useState } from 'react';
import { Link } from 'react-scroll';
import { Sling as Hamburger } from 'hamburger-react';
import SideNav from './SideNav';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className='sticky top-0 bottom-0  bg-nav text-gray-200 p-4  border-b-4 border-secondary z-10 '>
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
      {isOpen && <SideNav isOpen={isOpen} setOpen={setOpen} />}
    </>
  );
};

export default Nav;

export const Links = ({ link, children }) => {
  return (
    <Link
      className='uppercase cursor-pointer hover:text-primary tracking-widest px-4 py-2 text-sm '
      to={link}>
      {children}
    </Link>
  );
};
