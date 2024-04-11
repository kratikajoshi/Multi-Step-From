import React from 'react';
import ghost from './ghost.jpg';

const Nexttwo = () => {
  return (
    <div className="flex flex-col mt-10 md:flex-row md:items-center justify-center md:justify-start p-8 w-full">
      {/* Image-section */}
      <div className="flex justify-center md:justify-center w-full md:w-1/2 mb-5 md:mb-0 md:ml-10">
        <img src={ghost} alt="ghost" className="h-60 md:h-70 w-auto object-contain" />
      </div>
      {/* Text-section */}
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold mb-5 text-gray-800">You're on your way!</h1>
          <p><span className='text-xl mb-2'>⭐⭐⭐⭐⭐</span></p>
          <p className="text-sm mt-3 italic font-medium md:text-base text-gray-600 leading-relaxed">
            "Through its engaging and well-structured courses, Brilliant has taught me 
            mathematical concepts that I previously struggled to understand. I now feel 
            confident approaching both technical job interviews and real-world problem solving situations."
          </p>
          <p className='italic mt-3 text-sm font-medium md:text-base text-gray-600'> -Jacob S.</p>
        </div>
      </div>
    </div>
  );
};

export default Nexttwo;
