import React from "react";
import runbuddy from "../../assets/images/runbuddy.png";
import horiseon from "../../assets/images/horiseon.png";
import nerdwords from "../../assets/images/nerdwordsss.png";
import karpe from "../../assets/images/Karpe-diem-ss.png";
import newproj from "../../assets/images/newproject.png";

function Work() {
  return (
    <section class="my-work" id="my-work">

      <h1>My Work</h1>

      <div class="cards">
          <div class="card">
              <div class="content">
                  <h3>Run Buddy</h3>
                  <a href="https://kwinahn.github.io/run-buddy/">
                      <img src={runbuddy} class="imgsize" alt="run buddy website"/>
                  </a>    
              </div>
          </div>

          
          <div class="card">
              <div class="content">
                  <h3>Horiseon</h3>
                  <a href="https://github.com/kwinahn/Refactor">
                      <img src={horiseon} class="imgsize" alt="horiseon website"/>
                  </a>
              </div>
          </div>

          <div class="card">
              <div class="content">
                  <h3>Nerd Words</h3>
                  <a href="https://github.com/MLemke24/Group-10">
                      <img src={nerdwords} class="imgsize" alt="nerd words website"/>
                  </a>
              </div>
          </div>

          <div class="card">
              <div class="content">
                  <h3>Karpe-Diem</h3>
                  <a href="https://karp-ediem.herokuapp.com/">
                      <img src={karpe} class="imgsize" alt="karpe-diem heroku website"/>
                  </a>
              </div>
          </div>

          <div class="card">
              <div class="content">
                  <img src={newproj} class="imgsize" alt="new project"/>
                  
              </div>
          </div>
      </div>
    </section>
  );
}

export default Work;

