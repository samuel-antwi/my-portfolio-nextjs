import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import graphcms from '../graphql/client';
import { GET_PROJECT } from '../graphql/queries';
import { VscChromeClose } from 'react-icons/vsc';
import { BsBoxArrowUpRight } from 'react-icons/bs';
const ProjectDetail = ({ setShowProject, projectDetail, setProjectDetail, loading }) => {
  if (!projectDetail) return null;

  const { images, title, description, slug, id, projectDescription } = projectDetail;

  return (
    <Styles className='fixed top-0 right-0 left-0 bottom-0 z-10'>
      <div
        data-aos='flip-left'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='1000'
        className='flex justify-center items-center inset-0 justify-items-center max-w-3xl mx-auto'>
        <div className='bg-white w-full mt-24 text-gray-800'>
          <img className='border-b-2 border-primary_1' src={images[0].url} alt={title} />
          <div className='px-5 pt-6 mb-10'>
            <h1 className='text-xl font-semibold text-gray-700 tracking-wider mb-6'>{title}</h1>
            <hr />
            <p className='py-5 text-gray-500'>{projectDescription}</p>
            <div className='flex items-center justify-between'>
              <a
                className='flex items-center transition duration-500 ease-in-out bg-primary_1 text-white py-2 px-3 uppercase tracking-wide text-sm hover:bg-white hover:text-primary'
                href='/'>
                <BsBoxArrowUpRight className='mr-3' size={18} />
                View Site
              </a>
              <button
                onClick={() => {
                  setProjectDetail(null);
                  setShowProject(false);
                }}>
                <VscChromeClose className='text-gray-400' size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default ProjectDetail;

const Styles = styled.div`
  background: rgba(0, 0, 0, 0.2);
`;
