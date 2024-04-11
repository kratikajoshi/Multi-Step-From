import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowLeft } from '@mui/icons-material';
import Description from './steps/Description';
import Experience from './steps/Experience';
import Math from './steps/Math';
import Nextone from './steps/Nextone';
import Nexttwo from './steps/Nexttwo';

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  //To handle next button

  const handleNext = () => {
    if (activeStep < 5) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSelectedOption(null);
    } else if (activeStep === 5) {
      navigate('/loader');
    }
  };

  //To handle back button

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (source, option) => {
    if (source === 'experience' || source === 'description' || source === 'math') {
      setSelectedOption(option);
    }
  };

  //To check continue disable or not

  const isContinueDisabled = () => {
    if (activeStep === 1 || activeStep === 2 || activeStep === 4) {
      return !selectedOption;
    } else {
      return false;
    }
  };

  //If "Continue" button not disable  

  const handleContinue = () => {
    if (!isContinueDisabled()) {
      handleNext();
    }
  };

  //setting pages steps for stepper

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return <Description onSelect={(option) => handleOptionSelect('description', option)} />;
      case 2:
        return <Experience onSelect={(option) => handleOptionSelect('experience', option)} />;
      case 3:
        return <Nextone />;
      case 4:
        return <Math onSelect={(option) => handleOptionSelect('math', option)} />;
      case 5:
        return <Nexttwo />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-6xl px-3">

        {/* Stepper */}

        <div className="flex items-center justify-between mt-4">
          <button
            className={`py-2 px-4 rounded ${activeStep === 1 ? 'text-white cursor-default' : 'text-black'}`}
            onClick={handleBack}
            disabled={activeStep === 1}
          >
            <KeyboardArrowLeft className="h-4 w-4 inline-block mr-1" />
          </button>
          <div className="relative flex-grow h-1 bg-gray-300 rounded-full ml-4">
            <div
              className="absolute top-0 left-0 h-full bg-teal-600 rounded-full"
              style={{ width: `${(activeStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content which appear between stepper and the "Continue" button */}

      <div className="flex-grow w-full px-6 py-4 items-center justify-center">
        {renderStep()}
      </div>

      {/* "Continue" button */}

      <button
        className={`py-2 px-10 mb-4 rounded ${isContinueDisabled() ? 'bg-gray-200 text-white' : 'bg-gray-900 text-white'}`}
        onClick={handleContinue}
        disabled={isContinueDisabled()}
      >

        {/* on reaching last page it will direct it to loader page */}

        {activeStep === 5 ? 'Continue' : 'Continue'}
      </button>

      {/* media-queries for mobile */}

      <style jsx>{`
        @media (max-width: 480px) {
          .flex-grow {
            flex-grow: 1; 
          }
          .w-full {
            width: 100%; 
          }
          .py-4 {
            padding-top: 1rem; 
            padding-bottom: 1rem; 
          }
          .h-screen {
            min-height: 100vh; 
          }
        }
      `}</style>
    </div>
  );
};

export default Stepper;
