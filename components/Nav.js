import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { VscChevronLeft, VscChevronRight, VscMenu, VscClose } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { Sling as Hamburger } from 'hamburger-react';

const Nav = () => {
  return (
    <Styles className='bg-nav text-gray-200 p-4 sticky top-0 border-b-4 border-secondary z-10'>
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
        <Hamburger duration={0.8} size={28} />
      </div>
    </Styles>
  );
};

export default Nav;

const Styles = styled.div`
  a {
    background: linear-gradient(to right, #11ccc9 50%, #252525 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    &:hover {
      background-position: left bottom;
    }
  }
`;
