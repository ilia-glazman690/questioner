const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the README content
function generateREADME(answers) {
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
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For additional questions, you can reach me through:
- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: ${answers.email}
  `;
}

// Prompting the user for information
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
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
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    // Writing the generated README content to README.md file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('README.md successfully generated!');
    });
  })
  .catch((error) => {
    console.error(error);
  });
