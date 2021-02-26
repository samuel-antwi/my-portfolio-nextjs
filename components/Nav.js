import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { VscChevronLeft, VscChevronRight, VscMenu, VscClose } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { Sling as Hamburger } from 'hamburger-react';

const Nav = () => {
  return (
    <div className='bg-nav text-gray-200 p-4 sticky top-0 border-b-4 border-secondary'>
      <div className='hidden md:block'>
        <ul className='flex items-center space-x-6  max-w-5xl mx-auto'>
          <li>
            <a className='uppercase tracking-widest hover:text-primary' href='/'>
              Home
            </a>
          </li>
          <li>
            <a className='uppercase tracking-wider hover:text-primary' href='/'>
              About
            </a>
          </li>
          <li>
            <a className='uppercase tracking-widest hover:text-primary' href='/'>
              Portfolio
            </a>
          </li>
          <li>
            <a className='uppercase tracking-widest hover:text-primary' href='/'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='md:hidden'>
        <Hamburger duration={0.8} size={28} />
      </div>
    </div>
  );
};

export default Nav;
