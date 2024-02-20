// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.github}

# Description

${data.description}

# Table of Contents
*[Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Licence
This project is licensed under the ${data.License} license.
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
//${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Question

question can be directed to github
${data.github}

you can also email me following this link
${data.email}
`;
}

module.exports = generateMarkdown;
