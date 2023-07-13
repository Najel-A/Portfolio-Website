import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Home() {
  const styles = {
    backgroundImage: "url('../../../public/logo512.png')",
    /* Additional background properties */
  };

  return (
    <div style={styles}>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default Home;
