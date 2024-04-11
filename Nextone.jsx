import React from 'react';
import progress from './progress.png';

const Nextone = () => {
  return (
    <div className="flex flex-col mt-10 md:flex-row md:items-center justify-center md:justify-start p-8 w-full">
      {/* Image Section */}
        <div className="flex justify-center md:justify-center w-full md:w-1/2 mb-5 md:mb-0 md:ml-10">
          <img src={progress} alt="Pulley" className="h-60 md:h-70 w-auto object-contain" />
        </div>

      {/* Text Section */}
      <div className="md:w-1/3">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold mb-5 text-gray-800">You're in the right place</h1>
          <p className="text-sm md:text-sm text-gray-800 leading-relaxed justify-center">
            Brilliant gets you hands-on to help improve your professional
            skills and knowledge.You'll interact with concepts and solve 
            fun problems in math, science, and computer science.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nextone;
