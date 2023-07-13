import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    // Maybe add a slide in for an image
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);
  
  return (
    <div>
      
    </div>
  );
}

export default Home;
