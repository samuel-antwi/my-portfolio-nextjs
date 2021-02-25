import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { VscChevronLeft, VscChevronRight, VscMenu, VscClose } from 'react-icons/vsc';
import { useRouter } from 'next/router';

const Nav = () => {
  return (
    <div className='bg-nav text-gray-200 p-4 sticky top-0 border-b-4 border-secondary'>
      <ul className='flex items-center space-x-6 max-w-5xl mx-auto'>
        <li>
          <a className='uppercase tracking-widest' href='/'>
            Home
          </a>
        </li>
        <li>
          <a className='uppercase tracking-wider' href='/'>
            About
          </a>
        </li>
        <li>
          <a className='uppercase tracking-widest' href='/'>
            Portfolio
          </a>
        </li>
        <li>
          <a className='uppercase tracking-widest' href='/'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

const NavStyles = styled.div`
  position: sticky;
  top: 0;
`;
