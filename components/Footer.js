import { BsChevronDoubleUp } from 'react-icons/bs';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <div className='bg-input p-5'>
      <div className=' flex justify-center items-center justify-items-center'>
        <button onClick={() => window.scrollTo(0, 0)} className=' p-2 bg-primary_1  -mt-12'>
          <BsChevronDoubleUp size={30} className='' />
        </button>
      </div>
      <div className='text-2xl flex items-center justify-items-center justify-center  space-x-6 py-10'>
        <SocialLinks link='https://www.linkedin.com/in/samuel-antwi/' icon={<FaLinkedinIn />} />
        <SocialLinks link='https://www.instagram.com/i_am_samuelantwi/' icon={<FaInstagram />} />
        <SocialLinks link='https://github.com/samuel-antwi' icon={<FaGithub />} />
        <SocialLinks link='https://twitter.com/_devantwi' icon={<FaTwitter />} />
      </div>
      <div className='text-gray-600 uppercase flex justify-items-center items-center justify-center'>
        <p className='text-sm'>
          Samuel Antwi <span className='text-primary'> &#169; {getYear} </span>
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
      className='bg-primary p-4 hover:bg-secondary transition ease-in-out duration-500'>
      {icon}
    </a>
  );
};
