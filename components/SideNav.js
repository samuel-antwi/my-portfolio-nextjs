import { motion } from 'framer-motion';
import Link from 'next/link';

const SideNav = ({ isOpen, setOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='sticky top-20 bg-primary h-64 text-gray-100 w-full p-5 flex flex-col space-y-4 md:hidden z-10'>
      <Links link='/'>Home</Links>
      <Links link='#about'>About</Links>
      <Links link='#portfolio'>Portfolio</Links>
      <Links link='#contact'>Contact</Links>
    </motion.div>
  );
};

export default SideNav;

const Links = ({ link, children }) => {
  return (
    <Link href={link}>
      <a className='uppercase text-gray-300 tracking-widest hover:text-primary text-sm'>
        {children}
      </a>
    </Link>
  );
};
