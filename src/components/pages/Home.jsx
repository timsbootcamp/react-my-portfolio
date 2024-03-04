// Home Component

import React from 'react';
import myPhoto from '../../assets/images/myPhoto.jpg'; 


function Home() {
  return (
  <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="content">
            <h3>About My Portfolio</h3>
            <p>Hello and welcome to my portfolio website!</p>
            <p>I'm Arvinder Anand, also known as Arvi, and I'm thrilled to share my journey with you. 
              With a background in backend development and a recent focus on upskilling in frontend 
              development, I bring a unique perspective to web development.</p>
            
            
            <p>  I'm passionate about creating engaging user experiences using frontend technologies like 
              HTML, CSS, and JavaScript. With expertise in frameworks like React.js, I craft dynamic 
              and responsive applications. I have a keen eye for design and a love for 
            creating beautiful and user-friendly web experiences.
            
            I strive to build websites and applications that not only look great but also function 
            seamlessly across all devices and platforms.</p>

            <p>
            Thank you for visiting my portfolio. I'm constantly learning and evolving to stay ahead of the curve in this ever-changing industry. I invite you to explore my projects and learn more about my journey as a web developer. If you have a project in mind or just want to connect, I'd love to hear from you.          
            </p>
            <p>Let's collaborate and create something extraordinary together!            
            </p>

          </div>
        </div>
        <div className="col-md-3">
            <img src={myPhoto} className="img-fluid" alt="Example Image" />
        </div>
      </div>
    </div>   
  );
}

export default Home;
