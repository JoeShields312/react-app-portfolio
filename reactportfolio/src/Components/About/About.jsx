import React from "react";
import '../../../src/App.css';
import Container from '../Container/Container'


function About() {
  return (
    <Container>
        <h1 className="text-white">About Me</h1>
        <div className="row pb-5">
          <div className="col-md-4">
            <img
              src={"http://drive.google.com/uc?export=view&id=1HyhTqVM_MEfo07pCaBenwGwQ8ntCoA3i"}
              className="card-img"
              alt="ProfilePic"
            />
          </div>
          <div className="AboutBox col-md-8 shadow-lg center rounded mt-5">
              <p className="card-text text-white font-weight-bold">
                My name is Joe Shields I’m a Software 
                Developer from the northern suburbs of Chicago. 
                I enjoy front-end design, creating three.js 3D elements
                but I'm focused on my back-end skills and have 
                recently started learning React. I have a diverse background 
                and recently received a cerificate in Full Stack Development
                from Northwestern University.
              </p>
          </div>
        </div>
    </Container>
  );
}

export default About;
