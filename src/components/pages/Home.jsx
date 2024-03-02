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
            <p>My name is Arvinder Anand (Arvi), and 
            I'm a passionate front-end developer with a keen eye for design and a love for 
            creating beautiful and user-friendly web experiences.
            I specialize in front-end development, working with technologies such as 
            HTML, CSS, JavaScript, and modern frameworks like React.js. With a strong 
            foundation in responsive design and accessibility principles, I strive to 
            build websites and applications that not only look great but also function 
            seamlessly across all devices and platforms.</p>

            <p>
            Thank you for visiting my portfolio. I'm constantly learning and evolving to stay ahead of the curve in this ever-changing industry. I invite you to explore my projects and learn more about my journey as a front-end developer. If you have a project in mind or just want to connect, I'd love to hear from you.          
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
