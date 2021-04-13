import styled from 'styled-components';
import Link from 'next/link';

const Portfolio = ({ projects }) => {
  return (
    <>
      <Styles className='portfolio font-raleway text-gray-100  bg-input md:py-20 py-10'>
        <div data-aos='slide-left' data-aos-duration='1000'>
          <h1 className='text-center uppercase md:text-3xl text-xl font-semibold tracking-widest mb-3'>
            Projects
          </h1>
          <div className='h-1 bg-gray-200 w-16 flex max-w-xs mx-auto md:mb-20 mb-10'></div>
        </div>
        <div className='md:grid lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto  md:px-8'>
          {projects.map((project) => {
            const { id, images, slug, skills, title } = project;
            return (
              <div key={id} className='wrapper project col-span-1 relative'>
                <img src={images[0].url} alt={title} />
                <div className='overlay bg-secondary opacity-80 overlay shadow-lg flex flex-col justify-items-center items-center justify-center '>
                  <div className='space-y-10'>
                    <div className='mb-10'>
                      <h2 className='text-center mb-1 text-xl font-semibold tracking-wider text-black uppercase'>
                        {title}
                      </h2>
                      <div className='flex justify-center space-x-2'>
                        {skills.map((skill, index) => (
                          <p className='text-base text-primary' key={index}>
                            {skill}
                          </p>
                        ))}
                      </div>
                    </div>
                    <Link href={`/project/${slug}`}>
                      <a>
                        <button
                          aria-label='View more'
                          className=' transition text-gray-800 duration-500 ease-in-out flex items-center  max-w-md mx-auto border-2 py-2 px-10 border-primary_1 hover:bg-primary_1 hover:text-white focus:outline-none'>
                          View more
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Styles>
    </>
  );
};

export default Portfolio;

const Styles = styled.div`
  .overlay {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 0;
    overflow: hidden;
    transition: 0.5s ease;
  }

  .wrapper:hover .overlay {
    height: 100%;
  }
`;
