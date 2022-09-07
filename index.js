const inquirer = require('inquirer');
const fs = require('fs');

const userInput = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What does your application do?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install your application.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use your application',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Describe how users can contribute to your application.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Give test instructions to users.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license are you using for you application?',
            choices: ["MIT License", "Apache License 2.0", "GNU General Public License", "Berkeley Software Distribution License"],
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
    ]);
};

const generateFile = ({ title, description, installation, usage, contribution, test, license, username, email }) =>
    `# ${title}

![license](${license === "MIT License" ? "./src/img/mitlic.JPG" : license === "Apache License 2.0" ? "./src/img/apache.JPG" : license === "GNU General Public License" ? "./src/img/GNU.JPG" : license === "Berkeley Software Distribution License" ? "./src/img/bsd.JPG" : "./src/img/noLicense.JPG"})

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [License](#license)
7. [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Test
${test}

## License
${license}

## Questions
User name: ${username}\\
Github: [https://github.com/${username}](https://github.com/${username})\\
For additional questions you can reach me at ${email}
`;

const init = () => {
    userInput()
        .then((ans) => fs.writeFileSync('README.md', generateFile(ans)))
        .then(() => console.log('Wrote readme. Go check it out!'))
        .catch((err) => console.error(err));
};

init();