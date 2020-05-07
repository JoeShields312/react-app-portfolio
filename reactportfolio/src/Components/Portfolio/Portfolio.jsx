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
        summary: "Educational platform designed to allow teachers and students easy access to their curriculum.",
        text: "Consilience"
      },
      { id: 2,
        imageSrc: "http://drive.google.com/uc?export=view&id=1BXVltJ1YBI5T4WkwcS-CUe4GouU62DxD",
        url: "https://budget-tracker25.herokuapp.com/",
        summary: "App that allows users to keep track of their spending and income, by transaction names and amounts. The program uses a line chart to give the user a visual understanding when it comes to their spending and income.",
        text: "Budget Tracker"
      },
      { id: 3,
        imageSrc: "http://drive.google.com/uc?export=view&id=1CkQj9YZwkUa9rQvyNQxXexfpMv-Vceid",
        url: "https://nutridish1.herokuapp.com/",
        summary: "App that allows users to search for recipes that are high in a specific nutrient. User will then have the ability to save the recipe to their login.",
        text: "NutriDish"
      },
      { id: 4,
        imageSrc: "http://drive.google.com/uc?export=view&id=1mpJRCsHUOzgui5izM2tFAR3lVTSPnATr",
        url: "https://jshields30.github.io/GroupProject1/",
        summary: "App that allows users the ability to find the top ten films in theaters, choose a film, and have access to movie details of the chosen film. They then see the nearest 5 theaters, which includes the next showing of the film they chose. Once they select a cinema, directions to the cinema populates. New results update if they select different movies or cineams.",
        text: "Movies & Groovies"
      },
      { id: 5,
        imageSrc: "http://drive.google.com/uc?export=view&id=1W7t-3fILUuh9u3gN5ToE1gM61jdVtJcR",
        url: "https://glacial-plateau-02354.herokuapp.com/",
        summary: "App that allows users the ability to search through a directory of employees to find specifically who they are searching for in the company. Search criteria for this app is only for by first and last name. App can be implemented with any companies directory and customized to search by department, name, or email. ",
        text: "Employee Directory"
      },
      { id: 6,
        imageSrc: "http://drive.google.com/uc?export=view&id=1Kriecd39WMkbNfM_Vc-_NvFGX9GLgg7R",
        url: "https://jshields30.github.io/WeatherDashboard/",
        summary: "Weather applications that allows users to search the current Weather, 5 day forecast, also stores a list of cities searched. ",
        text: "Weather Dashboard"
      },
      { id: 7,
        imageSrc: "http://drive.google.com/uc?export=view&id=1L9eh8Ne7p-xLzjN9ICWYMYjBudqRrS1v",
        url: "https://jshields30.github.io/RandomPasswordGenerator/",
        summary: "App that generates a password with unique random charaters. Users selects the length of characters they want in their generated password",
        text: "Random Password Generator"
      },
      { id: 8,
        imageSrc: "http://drive.google.com/uc?export=view&id=1QU0aDcMbO0cac59w0VHRHcm1XX4cUC9z",
        url: "https://jshields30.github.io/AvengersQuiz/",
        summary: "Timed 10 question multiple choice quiz with 4 answer choices per question.",
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
          key={project.id} id={project.id} imageSrc={project.imageSrc} url={project.url} summary={project.summary} text={project.text} />
</React.Fragment>
        )
      })}
      </div>
    </Container>
  );
}

export default Portfolio;