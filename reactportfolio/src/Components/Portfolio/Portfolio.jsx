import React from "react";
import Container from "../Container/Container";
import PortfolioItem from '../PortfolioItem/PortfolioItem';

// async function ProjectItem(props) {
// return <li>{props.value}</li>
// }

// function ProjectList(props) {
//   const data = props.data;
//   const projectItems = data.map((data) => 
//       <ProjectItem key={data.toString()} value={data} />
//   );
//   return (
  const data = [
      {id: 1,
        imageSrc: "https://drive.google.com/uc?export=view&id=1bO7TBpyNlZQp4fzUvCHkL202XuFzhJaO",
        url: "https://jshields30.github.io/AvengersQuiz/",
        text: "Avengers Quiz"
      },
      { id: 2,
        imageSrc: "https://drive.google.com/uc?export=view&id=18a_ShEhv1mWk3dDou-6UHqyuFfPABmjZ",
        url: "https://jshields30.github.io/GroupProject1/",
        text: "Quick movie finder aka Movies & Groovies"
      },
      { id: 3,
        imageSrc: "https://drive.google.com/uc?export=view&id=1MUJ6Z6BFrDfKlWIhAaLIU-09t_G3x6eN",
        url: "https://jshields30.github.io/WeatherDashboard/",
        text: "Weather Dashboard"
      },
      { id: 4,
        imageSrc: "https://drive.google.com/uc?export=view&id=1bp8qmSC43pGkbsgWetrUgV1-CUehSNY8",
        url: "https://jshields30.github.io/RandomPasswordGenerator/",
        text: "Random Password Generator"
      },
      { id: 5,
        imageSrc: "https://drive.google.com/uc?export=view&id=12Y3cKS8BzFbMJmML_hUh7p1Dm-Y-R86Z",
        url: "https://nutridish1.herokuapp.com/",
        text: "NutriDish"
      },
      { id: 6,
        imageSrc: "https://drive.google.com/uc?export=view&id=17RGsly_NG_yDXkvRDRU1dx-jKJGeRCT0",
        url: "https://workouttrackerjs.herokuapp.com/?id=5e5ad06cecdec85ee0cf7d90",
        text: "Workout Tracker "
      },
      { id: 7,
        imageSrc: "https://drive.google.com/uc?export=view&id=14ILqEWKPdM2p9Ei0p_KkjvX8Rq3VQCiw",
        url: "https://budget-tracker25.herokuapp.com/",
        text: "Budget Tracker"
      },
      { id: 8,
        imageSrc: "https://drive.google.com/uc?export=view&id=1iSbEakFgGLRYREA0XNkHhvzJJap70jJh",
        url: "https://glacial-plateau-02354.herokuapp.com/",
        text: "Employee Directory"
      }
    ];
  //   )
  // }
  
function Portfolio() {
  return (
    <Container>
      <div className="row pb-4">
      {data.map((project) => {
        console.log(project)
        return (
<React.Fragment key={project.id}>
          <PortfolioItem
          key={project.id} id={project.id} imageSrc={project.imageSrc} url={project.url} text={project.text} />
</React.Fragment>
        )
      })}
      </div>
    </Container>
  );
}

export default Portfolio;