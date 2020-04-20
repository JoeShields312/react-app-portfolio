import React from "react";
import "../../../src/App.css";
import Container from "../Container/Container";
const style = {
  textShadow: "0px 5px 13px #61dbfb,1px 0px 30px #000000,4px -3px 22px #61dbfb",
  paddingBottom: "20px",
}

function About() {
  return (
    <Container>
      <h1 className="text-white" style={style} >About Me</h1>
      <div className="row pb-5">
        <div className="col-md-4">
          <img
            src={
              "http://drive.google.com/uc?export=view&id=1HyhTqVM_MEfo07pCaBenwGwQ8ntCoA3i"
            }
            className="card-img"
            alt="ProfilePic"
          />
        </div>
        <div className="AboutBox col-md-8 shadow-lg center rounded mt-5">
          <p className="card-text text-white font-weight-bold">
            My name is Joe Shields, and I’m a Software Developer from the north
            suburbs of Chicago. I have become proficient in React, and enjoy front-end design. I have
            a diverse background, and I have recently received a cerificate in Full
            Stack Development from Northwestern University.
            </p>
            <p className="card-text text-white font-weight-bold"> 
            React | Express | Node | MongoDB | SQL | JavaScript | jQuery | Bootstrap | HTML5 | CSS3
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
