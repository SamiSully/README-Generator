// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![ALT](https://img.shields.io/badge/license-${data.message}-${data.color})

## Description
${data.description}
  
## Table Of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributers](#Contributors)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)
  
## Description
${data.installation}
  
## Usage
${data.usage}
  
## Contributors
${data.contributors}

(https://www.github.com/${data.username})

${data.tech}
  
## Tests
${data.tests}
  
## License
${data.license}

Copyright © ${data.name} ${data.year}
  
## Questions
If you have any questions, you can reach out to me directly at ${data.questions}
  
`;
}

module.exports = generateMarkdown;
