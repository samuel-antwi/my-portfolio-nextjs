import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';
import { BsBoxArrowUpRight } from 'react-icons/bs';
const ProjectDetail = ({ setShowProject, projectDetail, setProjectDetail, loading }) => {
  if (!projectDetail) return null;

  if (loading) return null;

  const { images, title, projectDescription } = projectDetail;

  return (
    <Styles className=''>
      <div className='flex justify-center items-center inset-0 justify-items-center max-w-3xl mx-auto'>
        <div className=' bg-white w-full mt-24 text-gray-800'>
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
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 1;
  transform: scaleY(0.01) scaleX(0);
  animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  .modal-background {
    .modal {
      transform: scale(0);
      animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }
  &.out {
    transform: scale(1);
    animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    .modal-background {
      .modal {
        animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
  }

  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }

  @keyframes unfoldOut {
    0% {
      transform: scaleY(1) scaleX(1);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(0.005) scaleX(0);
    }
  }
`;

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import graphcms from '../graphql/client';
// import { GET_PROJECT } from '../graphql/queries';
// import { VscChromeClose } from 'react-icons/vsc';
// import { BsBoxArrowUpRight } from 'react-icons/bs';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

// const ProjectDetail = ({
//   open,
//   setOpen,
//   projectDetail,
//   setProjectDetail,
//   onCloseModal,
//   onOpenModal,
// }) => {
//   if (!projectDetail) return null;

//   const { images, title, projectDescription } = projectDetail;

//   return (
//     <Modal
//       classNames='customEnterOverlayAnimation'
//       open={open}
//       onClose={onCloseModal}
//       center
//       showCloseIcon={false}>
//       <div className='flex justify-center items-center inset-0 justify-items-center max-w-3xl mx-auto'>
//         <div className='bg-white w-full mt-24 text-gray-800'>
//           <img className='border-b-2 border-primary_1' src={images[0].url} alt={title} />
//           <div className='px-5 pt-6 mb-10'>
//             <h1 className='text-xl font-semibold text-gray-700 tracking-wider mb-6'>{title}</h1>
//             <hr />
//             <p className='py-5 text-gray-500'>{projectDescription}</p>
//             <div className='flex items-center justify-between'>
//               <a
//                 className='flex items-center transition duration-500 ease-in-out bg-primary_1 text-white py-2 px-3 uppercase tracking-wide text-sm hover:bg-white hover:text-primary'
//                 href='/'>
//                 <BsBoxArrowUpRight className='mr-3' size={18} />
//                 View Site
//               </a>
//               <button
//                 onClick={() => {
//                   setProjectDetail(null);
//                   setOpen(false);
//                 }}>
//                 <VscChromeClose className='text-gray-400' size={25} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default ProjectDetail;
