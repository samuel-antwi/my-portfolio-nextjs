import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-scroll'

const SideNav = ({ isOpen, setOpen }) => {
  return (
    <div
      className={` ${
        isOpen ? '-translate-x-0' : '-translate-x-full'
      }  bg-gray-900 w-full p-8 text-blue-50  absolute inset-y-0 z-[20] md:relative md:hidden transition duration-500 left-0 transform  ease-in-out`}>
      <div>
        <div className='flex justify-end'>
          <button className='focus:outline-none' onClick={() => setOpen(false)}>
            <VscChromeClose className='text-gray-500' size={30} />
          </button>
        </div>
        <div className='flex flex-col space-y-6'>
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
  )
}

export default SideNav

const Links = ({ link, children, setOpen }) => {
  return (
    <Link
      className='tracking-widest uppercase transition duration-300 cursor-pointer  hover:underline hover:text-primary'
      onClick={() => setOpen(false)}
      to={link}>
      {children}
    </Link>
  )
}
