import React from 'react';
import Particles from 'react-tsparticles';
import particlesconfig from '../particlesconfig';

const Background = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#252a35',
      }}>
      <Particles params={particlesconfig} />
    </div>
  );
};

export default Background;
