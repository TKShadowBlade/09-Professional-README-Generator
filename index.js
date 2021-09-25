const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your application?',
      name: 'app name',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Write a description for your app:',
      name: 'description',
    },
  ])
  