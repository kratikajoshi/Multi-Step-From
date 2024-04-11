import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Math = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  //To handle options-selection

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
      onSelect(option);
    }
  };

  const isOptionSelected = (option) => {
    return selectedOption === option;
  };

  return (
    <div className="container px-4 py-8 flex flex-col items-center justify-center">

      {/* Top-content */}

      <div className="flex flex-col items-center mb-12">
        <h1 className="text-lg font-medium text-center">Which is your math comfort level?</h1>
        <p className="text-gray-400 mt-2 text-sm text-center">Choose the highest level you feel confident in - you can always adjust later.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Option 1 and Option 2 - Setting Responsive Layout for Tablet Screens */}
        {/* Option 1 */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-end md:gap-4">
        <div
          className={`option-container flex flex-col items-center justify-center p-4 border cursor-pointer ${isOptionSelected('option1') ? 'border-yellow-300 shadow-lg' : 'border-gray-100'} hover:border-yellow-200 hover:shadow-md`}
          style={{ width: '200px' }}
          onClick={() => handleOptionClick('option1')}
        >
          <BlockMath math="5 \times \frac{1}{2} = ?" />
          <div className="text-center mt-5">
            <h3 className="text-sm font-semibold">Arithmetic</h3>
            <p className="text-gray-600 text-base">Introductory</p>
          </div>
        </div>
        {/* Option 2 */}
        <div
          className={`option-container flex flex-col items-center justify-center p-4 border cursor-pointer ${isOptionSelected('option2') ? 'border-yellow-300 shadow-lg' : 'border-gray-100'} hover:border-yellow-200 hover:shadow-md`}
          style={{ width: '200px' }}
          onClick={() => handleOptionClick('option2')}
        >
          <BlockMath math="3x + 5 = 4" />
          <div className="text-center mt-9">
            <h3 className="text-sm font-semibold">Basic Algebra</h3>
            <p className="text-gray-600 text-base ">Foundational</p>
          </div>
        </div>
      </div>
        {/* Option 3 and Option 4 - Setting Responsive Layout for Tablet Screens */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-start md:gap-4">
          {/* Option 3 */}
          <div
            className={`option-container flex flex-col items-center justify-center p-4 border cursor-pointer ${isOptionSelected('option3') ? 'border-yellow-300 shadow-lg' : 'border-gray-100'} hover:border-yellow-200 hover:shadow-md`}
            style={{ width: '200px' }}
            onClick={() => handleOptionClick('option3')}
          >
            <BlockMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
            <div className="text-center mt-4">
              <h3 className="text-sm font-semibold">Intermediate Algebra</h3>
              <p className="text-gray-600 text-base">Intermediate</p>
            </div>
          </div>

          {/* Option 4 */}
          <div
            className={`option-container flex flex-col items-center justify-center p-4 border cursor-pointer ${isOptionSelected('option4') ? 'border-yellow-300 shadow-lg' : 'border-gray-100'} hover:border-yellow-200 hover:shadow-md`}
            style={{ width: '200px' }}
            onClick={() => handleOptionClick('option4')}
          >
            <BlockMath math="\int_{0}^{L} x^2 \, dx" />
            <div className="text-center mt-4">
              <h3 className="text-sm font-semibold">Calculus</h3>
              <p className="text-gray-600 text-base">Advanced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Math;
