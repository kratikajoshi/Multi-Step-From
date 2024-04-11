import React from 'react';
import './Final.css';
import MM from './MM.png';

const Final = () => {
  return (
    <div className="box">
      {/* Heading */}
      <div className="first-container">
        <h1 className="main-heading">Learning paths based on your answers</h1>
        <p className='mt-3'>Choose one to get started. You can switch anytime.</p>
      </div>
      {/* Option-boxes */}
      <div className="boxes-container">
      <div className="stack">MOST POPULAR</div>
        <div className="boxes">
          <div className="box-content">
            <div className="box-text">
              <p className=''> <b>Foundational Math </b>
                Build your foundational skills in algebra, geometry, and probability.</p>
            </div>
            <img src={MM} alt="Course Icon" className="box-image" />
          </div>
        </div>
        <div className="boxes">
          <div className="box-content">
            <div className="box-text">
              <p><b>Mathematical Math </b>
                Build your foundational skills in algebra, geometry, and probability.</p>
            </div>
            <img src={MM} alt="Course Icon" className="box-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
