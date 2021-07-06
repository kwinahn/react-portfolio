import React from 'react';
import PT from '../../assets/images/portrait.jpg'

function Hero() {
  return (
    <section class="hero">
      <div>
          <h1>Welcome</h1>
          <h2>Anh Nguyen's Portfolio</h2>
          <img src={PT} alt="portrait"/>
      </div>
    </section>
  );
}

export default Hero;
