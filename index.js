const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the README content based on user input
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}

// Questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'Other'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to prompt the user with questions
function promptUser() {
  return inquirer.prompt(questions);
}

// Function to write the README file
function writeReadme(content) {
  fs.writeFile('README.md', content, (err) => {
    if (err) {
      console.error('Error writing README:', err);
    } else {
      console.log('README.md file generated successfully!');
    }
  });
}

// Main function
async function init() {
  try {
    console.log('Answer the following questions to generate the README file:');
    const answers = await promptUser();
    const readmeContent = generateReadme(answers);
    writeReadme(readmeContent);
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

// Invoke the main function
init();

