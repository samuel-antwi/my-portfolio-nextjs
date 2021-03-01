import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { VscChevronLeft, VscChevronRight, VscMenu, VscClose } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { Sling as Hamburger } from 'hamburger-react';
import SideNav from './SideNav';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Styles className='sticky top-0 bg-nav text-gray-200 p-4  border-b-4 border-secondary z-20 '>
        <div className='hidden md:block'>
          <ul className='flex items-center space-x-6  max-w-5xl mx-auto'>
            <li>
              <a className='uppercase tracking-widest px-4 py-2 text-sm ' href='/'>
                Home
              </a>
            </li>
            <li>
              <a className='uppercase tracking-wider px-4 py-2 text-sm' href='/'>
                About
              </a>
            </li>
            <li>
              <a className='uppercase tracking-widest px-4 py-2 text-sm' href='/'>
                Portfolio
              </a>
            </li>
            <li>
              <a className='uppercase tracking-widest px-4 py-2 text-sm' href='/'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='md:hidden'>
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} size={28} />
        </div>
      </Styles>
      {isOpen && <SideNav isOpen={isOpen} setOpen={setOpen} />}
    </>
  );
};

export default Nav;

const Styles = styled.div`
  a:hover {
    color: #e31c6d;
  }
`;
