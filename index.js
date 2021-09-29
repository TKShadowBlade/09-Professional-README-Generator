//importing node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer questions
const questions = [

    {
      type: 'input',
      message: 'What is the name of your application?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
      },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },  
    {
      type: 'input',
      message: 'Write a description for your app:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation instructions for your app:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Instructions for using your app:',
        name: 'usage',
      },
      //List of licenses
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['GNU GPLv3', 'MIT License', 'GNU AGPLv3', 'Apache License 2.0']
    },
    {
        type: 'input',
        message: 'Include any contributions:',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Detail any testing instructions:',
        name: 'test',
    },
]

  // Function for generating data for MD File
  function createMD(data){
return `${data.title}
## Licensing:
[![license](https://img.shields.io/badge/license-${data.license}-orange)](https://shields.io)
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contribute)
5. [Tests](#test)
6. [Questions](#github)
## Description
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contributing:
${data.contribute}
## Tests:
${data.test}
## Questions:
If you have any questions, you can reach me via email at ${data.email},
or you can view my Github profile at github.com/${data.github}.`
  }

  /*function to generate the license badge
  function renderLicenseBadge(data.license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
    }
    return '';
  }
  */
//function to create readme file
inquirer.prompt(questions).then((data)=> {
    let newFile = createMD(data);
  fs.writeFile("./readme.md", newFile, (err)=>{
    if(err){
        return console.log(err);
    }
    console.log('File has been successfully created');
  })

}) 
