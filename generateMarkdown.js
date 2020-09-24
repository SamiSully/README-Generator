// function to generate markdown for README
function generateMarkdown(data) {
  return `
      # ${data.title}

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
      ${data.Usage}
  
      ## Contributors
      ${data.contributors}
  
      ## Tests
      ${data.tests}
  
      ## License
      ${data.license}
  
      ## Questions
      ${data.questions}
  
      `;
}

module.exports = generateMarkdown;
