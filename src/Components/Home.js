import React, { useState } from 'react';


const Home = () => {
  const [showDoubleScreen, setShowDoubleScreen] = useState(false);

  const handleButtonClick = () => {
    setShowDoubleScreen(!showDoubleScreen);
  };

  return (
    <div className="container">
      <button className="homeButton" onClick={handleButtonClick}>
        Home Page
      </button>
      <div className={`screen ${showDoubleScreen ? 'doubleScreen' : ''}`}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the screen.</p>
      </div>
    </div>
  );
};

export default Home;
