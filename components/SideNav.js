import { GrClose } from 'react-icons/gr';
import { Link } from 'react-scroll';

const SideNav = ({ isOpen, setOpen }) => {
  return (
    <div
      className={` ${
        isOpen ? '-translate-x-0' : '-translate-x-full'
      }  bg-gray-900 w-full p-8 text-blue-50  absolute inset-y-0 z-[20] md:relative md:hidden transition duration-500 left-0 transform  ease-in-out`}>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='mb-10 text-3xl font-semibold tracking-wide'>Progym</h1>
          <button>
            <GrClose size={25} />
          </button>
        </div>
        <div className='space-y-6 flex flex-col'>
          <Links className='cursor-pointer' setOpen={setOpen} link='home'>
            Home
          </Links>
          <Links className='cursor-pointer' setOpen={setOpen} link='about'>
            About
          </Links>
          <Links className='cursor-pointer' setOpen={setOpen} link='portfolio'>
            Portfolio
          </Links>
          <Links className='cursor-pointer' setOpen={setOpen} link='contact'>
            Contact
          </Links>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const Links = ({ link, children, setOpen }) => {
  return (
    <Link
      className='cursor-pointer uppercase hover:text-primary tracking-widest transition duration-300'
      onClick={() => setOpen(false)}
      to={link}>
      {children}
    </Link>
  );
};
