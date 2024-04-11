import React, { useState } from 'react';


const Description = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  //To handle options-selection

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
      onSelect('description', option);
    }
  };

  const isOptionSelected = (option) => {
    return selectedOption === option;
  };

  return (
    <div className="container">
      {/* Top-content */}
      <div className="content-container">
      <h1 className="heading">Which describes you best?</h1>
      <p className="text">This will help us personalize your experience.</p>
      </div>
      <div className="options-container-main">
        {/* Option 1 */}
        <div className={`option-container ${isOptionSelected('option1') ? 'selected' : ''}`} onClick={() => handleOptionClick('option1')}>
          <span className="emoji">👨‍🎓</span>
          <span className="option-title">
            <b className="b">Student</b> or soon to be enrolled
          </span>
        </div>
        {/* Option 2 */}
        <div className={`option-container ${isOptionSelected('option2') ? 'selected' : ''}`} onClick={() => handleOptionClick('option2')}>
          <span className="emoji">👩‍💻</span>
          <span className="option-title">
            <b className="b">Professional</b> pursuing a career
          </span>
        </div>
        {/* Option 3 */}
        <div className={`option-container ${isOptionSelected('option3') ? 'selected' : ''}`} onClick={() => handleOptionClick('option3')}>
          <span className="emoji">👩‍👧</span>
          <span className="option-title">
            <b className="b">Parent</b> of a school-age child
          </span>
        </div>
        {/* Option 4 */}
        <div className={`option-container ${isOptionSelected('option4') ? 'selected' : ''}`} onClick={() => handleOptionClick('option4')}>
          <span className="emoji">👵</span>
          <span className="option-title">
            <b className="b">Lifelong Learner</b>
          </span>
        </div>
        {/* Option 5 */}
        <div className={`option-container ${isOptionSelected('option5') ? 'selected' : ''}`} onClick={() => handleOptionClick('option5')}>
          <span className="emoji">👩‍🏫</span>
          <span className="option-title">
            <b className="b">Teacher</b>
          </span>
        </div>
        {/* Option 6 */}
        <div className={`option-container ${isOptionSelected('option6') ? 'selected' : ''}`} onClick={() => handleOptionClick('option6')}>
          <span className="emoji">👤</span>
          <span className="option-title">
            <b className="b">Other</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Description;
