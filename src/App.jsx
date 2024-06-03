import React, { useState } from 'react';
import HeaderPart from './Components/HeaderPart';
import './App.css';
import FooterPart from './Components/FooterPart';
import MiddleContent from './Components/MiddleContent';

function App() {
  const [showComponent, setShowComponent] = useState(null);
  const handleLinkClick = (component) => {
    setShowComponent(component);
  };
  return (
    <>
      <HeaderPart handleLinkClick={handleLinkClick} />
      <MiddleContent component={showComponent} />
      <FooterPart />
    </>
  );
}

export default App;