import React, { useState } from 'react';
import '../../index.css';

const Experience = ({ onSelect }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  //To handle options-selection

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
      onSelect('experience', option);
    }
  };

  const isOptionSelected = (option) => {
    return selectedOption === option;
  };

  return (
    <div className="container">
      <div className="content-container">
        <h1 className="heading">Which are you most interested in?</h1>
        <p className="text">Choose just one. This will help us get you started (but won't limit your experience). </p>
      </div>
      <div className="options-container-main ">
        {/* Option 1 */}
        <div className={`option-container ${isOptionSelected('option1') ? 'selected' : ''}`} 
        onClick={() => handleOptionClick('option1')}>
          <span className="emoji">📈</span>
          <span className="option-title  ">
          <p className='font-medium text-sm'>Learning specific skills to advance my career</p>
          </span>
        </div>
        {/* Option 2 */}
        <div className={`option-container ${isOptionSelected('option2') ? 'selected' : ''}`} 
        onClick={() => handleOptionClick('option2')}>
          <span className="emoji">🌐</span>
          <span className="option-title">
          <p className='font-medium text-sm'>  Exploring new topics I'm interested in </p>
          </span>
        </div>
        {/* Option 3 */}
        <div className={`option-container ${isOptionSelected('option3') ? 'selected' : ''}`}
        onClick={() => handleOptionClick('option3')}>
          <span className="emoji">🧮</span>
          <span className="option-title">
          <p className='font-medium text-sm'>Refreshing my math foundations</p>
          </span>
        </div>
        {/* Option 4 */}
        <div className={`option-container ${isOptionSelected('option4') ? 'selected' : ''}`}
        onClick={() => handleOptionClick('option4')}>
          <span className="emoji">🎯</span>
          <span className="option-title">
          <p className='font-medium text-sm'>Exercising my brain to stay sharp</p>
          </span>
        </div>
        {/* Option 5 */}
        <div className={`option-container ${isOptionSelected('option5') ? 'selected' : ''}`}
        onClick={() => handleOptionClick('option5')}>
          <span className="emoji">👀</span>
          <span className="option-title">
          <p className='font-medium text-sm'>Something else</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
