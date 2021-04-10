import { useContext, useState } from 'react';

import { StateContext } from './stateContext';

export const StateProvider = ({ children }) => {
  const [showProject, setShowProject] = useState(false);

  const toggleShowProject = () => {
    setShowProject((showProject) => !showProject);
  };

  return (
    <StateContext.Provider value={{ showProject, toggleShowProject }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
