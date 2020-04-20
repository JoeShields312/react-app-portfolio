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
        imageSrc: "http://drive.google.com/uc?export=view&id=1Thjj6mUKPbY57_GimZ6bJwAcWv_QVMqw",
        url: "https://classroom-consilience.herokuapp.com/",
        text: "Consilience"
      },
      { id: 2,
        imageSrc: "http://drive.google.com/uc?export=view&id=1BXVltJ1YBI5T4WkwcS-CUe4GouU62DxD",
        url: "https://budget-tracker25.herokuapp.com/",
        text: "Budget Tracker"
      },
      { id: 3,
        imageSrc: "http://drive.google.com/uc?export=view&id=1CkQj9YZwkUa9rQvyNQxXexfpMv-Vceid",
        url: "https://nutridish1.herokuapp.com/",
        text: "NutriDish"
      },
      { id: 4,
        imageSrc: "http://drive.google.com/uc?export=view&id=1mpJRCsHUOzgui5izM2tFAR3lVTSPnATr",
        url: "https://jshields30.github.io/GroupProject1/",
        text: "Movies & Groovies"
      },
      { id: 5,
        imageSrc: "http://drive.google.com/uc?export=view&id=1W7t-3fILUuh9u3gN5ToE1gM61jdVtJcR",
        url: "https://glacial-plateau-02354.herokuapp.com/",
        text: "Employee Directory"
      },
      { id: 6,
        imageSrc: "http://drive.google.com/uc?export=view&id=1Kriecd39WMkbNfM_Vc-_NvFGX9GLgg7R",
        url: "https://jshields30.github.io/WeatherDashboard/",
        text: "Weather Dashboard"
      },
      { id: 7,
        imageSrc: "http://drive.google.com/uc?export=view&id=1L9eh8Ne7p-xLzjN9ICWYMYjBudqRrS1v",
        url: "https://jshields30.github.io/RandomPasswordGenerator/",
        text: "Random Password Generator"
      },
      { id: 8,
        imageSrc: "http://drive.google.com/uc?export=view&id=1QU0aDcMbO0cac59w0VHRHcm1XX4cUC9z",
        url: "https://jshields30.github.io/AvengersQuiz/",
        text: "Avengers Quiz"
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