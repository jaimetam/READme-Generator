// TODO: Include packages needed for this application


const fs = require('fs');
const inquirer = require("inquirer");

const generateREADME = ({ title, Description, installation, Usage, Contributing, Test, github, email }) => 
`
# ${title}


# Description
${Description}


## installation 
${installation}

## Usage
${Usage}

## Contributing
${Contributing}

## Test
${Test}

## Questions
 if you have any questions here is my github and email
 -${github}
 -${email}


## Link

## N/A License Please refer to the LICENSE in the repo

`;



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
    const content = generateREADME(answers);
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



// TODO: Create a function to write README file
function init() {}
init();
