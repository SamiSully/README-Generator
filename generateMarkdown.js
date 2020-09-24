// function to generate markdown for README
function generateMarkdown(data) {
  return `
      # ${data.title}

      ## Description
      ${data.Description}
  
      ## Table Of Contents
      * [Installation](#Installation)
      * [Usage](#Usage)
      * [Contributers](#Contributors)
      * [Tests](#Tests)
      * [License](#License)
      * [Questions](#Questions)
  
      ## Description
      ${data.Installation}
  
      ## Usage
      ${data.Usage}
  
      ## Contributors
      ${data.Contributors}
  
      ## Tests
      ${data.Tests}
  
      ## License
      ${data.License}
  
      ## Questions
      ${data.Questions}
  
      `;
}

module.exports = generateMarkdown;
