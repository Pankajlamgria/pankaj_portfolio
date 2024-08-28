import React from 'react';
import { ReactTyped } from 'react-typed';

const Typewriter = () => {
  return (
      <span className='lg:text-text lg:text-3xl md:text-xl md:font-bold drop-shadow-3xl lg:tracking-wide md:tracking-tighter'>
      <ReactTyped
        strings={['Web Developer', 'ML Developer', 'Competitive Programmer']}
        typeSpeed={80}
        backSpeed={80}
        delaySpeed={1000}
        loop
      />
      </span>
  );
};

export default Typewriter;
