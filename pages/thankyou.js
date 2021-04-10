import Link from 'next/link';

const ThankYou = () => {
  return (
    <div className='bg-primary text-gray-100 min-h-screen flex'>
      <div data-aos='flip-right' data-aos-duration='1000' className='max-w-4xl m-auto text-center'>
        <h1 className='md:text-4xl text-2xl tracking-wide mb-3'>Thank you for your message.</h1>
        <p className='text-gray-300 text-lg'>
          Your message is really important to me and I will be in touch very soon!
        </p>
        <Link href='/'>
          <a>
            <button className='border text-gray-400 rounded-md hover:bg-secondary hover:text-gray-100 border-secondary mt-5 py-2 px-10 uppercase tracking-wide transition duration-200'>
              Home
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
