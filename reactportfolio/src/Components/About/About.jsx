import React from "react";
import "../../../src/App.css";
import Container from "../Container/Container";
const style = {
  textShadow: "0px 5px 13px #61dbfb,1px 0px 30px #000000,4px -3px 22px #61dbfb",
  paddingBottom: "20px",
};

function About() {
  return (
    <Container>
      <h1 className="text-white" style={style}>
        About Me
      </h1>
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
            Software Engineer skilled in both back-end and front-end, with
            particular interests in design and UX-UI experience. My career as a
            director of market research sparked my interests and brought me
            closer to my true passion of creating web applications. I like to be
            creative and unique, but I also enjoy the technical challenges of
            back-end development. When programming I follow structure and order,
            since they are essential when creating quality web applications. I
            enjoy spending time fixing small details, and optimizing
            applications. Working in a team setting is ideal, since more
            knowledge will be obtained between developers. In the next phase of
            my career, I want to continue to be challenged and tested, as a
            means to maintain growth as a developer.
          </p>
          <p className="card-text text-white font-weight-bold">
            React | Express | Node | MongoDB | SQL | JavaScript | jQuery |
            Bootstrap | HTML5 | CSS3
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
