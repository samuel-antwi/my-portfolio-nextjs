import React, { useState } from 'react';

const useShowProject = () => {
  const [showProject, setShowProject] = useState(false);

  const toggleShowProject = () => {
    setShowProject(!showProject);
  };
  return [showProject, setShowProject, toggleShowProject];
};

export default useShowProject;
