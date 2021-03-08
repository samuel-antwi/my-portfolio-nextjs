import { BsChevronDoubleUp } from 'react-icons/bs';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <div className='bg-input p-5'>
      <Link to='home' className=' flex justify-center items-center justify-items-center'>
        <button aria-label='scroll to top' className=' p-2 bg-primary_1  -mt-12'>
          <BsChevronDoubleUp size={30} className='' />
        </button>
      </Link>
      <div className='text-2xl flex items-center justify-items-center justify-center  space-x-6 py-10'>
        <SocialLinks link='https://www.linkedin.com/in/samuel-antwi/' icon={<FaLinkedinIn />} />
        <SocialLinks link='https://www.instagram.com/i_am_samuelantwi/' icon={<FaInstagram />} />
        <SocialLinks link='https://github.com/samuel-antwi' icon={<FaGithub />} />
        <SocialLinks link='https://twitter.com/_devantwi' icon={<FaTwitter />} />
      </div>
      <div className='text-gray-400 uppercase flex justify-items-center items-center justify-center'>
        <p className='text-sm'>
          <span className='text-primary'> &#169; 2019 - {getYear} </span> Samuel Antwi
        </p>
      </div>
    </div>
  );
};

export default Footer;

export const SocialLinks = ({ link, icon }) => {
  return (
    <a
      href={link}
      target='_blank '
      rel='noreferrer noopener'
      className=' bg-primary xs:p-4 p-2 hover:bg-secondary transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110'>
      {icon}
    </a>
  );
};
