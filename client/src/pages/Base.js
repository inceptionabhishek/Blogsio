import React from 'react';
import Topcover from '../components/Pagecomponents/Topcover';
import Home from '../components/Pagecomponents/Home';
import Footer from '../components/UI/Footer';

function Base() {
  return (
    <>
      <div className='background'>
        <Topcover />
        <Home />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Base