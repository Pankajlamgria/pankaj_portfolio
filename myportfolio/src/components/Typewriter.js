import React from 'react';
import { ReactTyped } from 'react-typed';

const Typewriter = () => {
  return (
      <span className='text-text drop-shadow-3xl'>
      <ReactTyped
        strings={['Web Developer', 'ML Developer', 'Competitive Programmer']}
        typeSpeed={100}
        backSpeed={100}
        delaySpeed={1000}
        loop
      />
      </span>
  );
};

export default Typewriter;
