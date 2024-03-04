// TODO: Include packages needed for this application


const fs = require('fs');
const inquirer = require("inquirer");
const  generateMarkdown = require("./utils/generateMarkdown")


 const generateReadMe = ()  =>{
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Project Title?",
      name: "title",
    },
    {
      type: "input",
      message: "Can you give me a Description of your project ",
      name: "Description",
    },
    {
      type: "input",
      message: "How is your project installed ",
      name: "installation",
    },
    {
      type: "input",
      message: "how is your project used",
      name: "Usage",
    },
    {
      type: "input",
      message: "how can some one else contribute to this project ",
      name: "Contributing",
    },

     {
        type: "input",
        message: "mention tests that can be executed withe code examples ",
        name: "Test",
      },

      {
        type: "input",
        message: "What is your github url?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your Email ?",
        name: "Email",
      },
  ])
  .then((answers) => {
    const content = generateMarkdown(answers);
    fs.writeFile('README.md', content, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("README file is generating")
        }
      });
  })
  .catch((error) => {
    console.log(error);
  });
 };


// TODO: Create a function to write README file
generateReadMe();
