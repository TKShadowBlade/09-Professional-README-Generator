//importing node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer questions
inquirer
  .prompt([
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
  ])
  
  