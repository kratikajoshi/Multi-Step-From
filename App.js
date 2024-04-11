import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stepper from './component/Stepper';
import Loader from './component/steps/Loader';
import Final from './component/steps/Final'; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route to all the pages of the stepper component */}
        <Route path="/" element={<Stepper />} />
        {/* Route to loader page component */}
        <Route path="/Loader" element={<Loader/>} />
        {/* Route to FinalPage component */}
        <Route path="/Final" element={<Final />} />
      </Routes>
    </Router>
  );
};

export default App;
