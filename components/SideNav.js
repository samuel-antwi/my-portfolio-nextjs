import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const SideNav = ({ isOpen, setOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='sticky top-20 bg-primary h-64 text-gray-100 w-full p-5 flex flex-col space-y-4 md:hidden z-10'>
      <Links setOpen={setOpen} link='home'>
        Home
      </Links>
      <Links setOpen={setOpen} link='about'>
        About
      </Links>
      <Links setOpen={setOpen} link='portfolio'>
        Portfolio
      </Links>
      <Links setOpen={setOpen} link='contact'>
        Contact
      </Links>
    </motion.div>
  );
};

export default SideNav;

const Links = ({ link, children, setOpen }) => {
  return (
    <Link
      to={link}
      className='uppercase cursor-pointer text-gray-300 tracking-widest hover:text-primary text-sm'>
      {children}
    </Link>
  );
};
