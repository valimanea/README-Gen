//get a badge for license
function licenseBadge(data) {
  const chosenLicense = data.license[0];
  let licenseValue = "";
  if (chosenLicense === "MIT") {
    licenseValue = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (chosenLicense === "APACHE 2.0") {
    licenseValue = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (chosenLicense === "GPL 3.0") {
    licenseValue = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (chosenLicense === "BSD 3") {
    licenseValue = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if (chosenLicense === "None" || licenseValue == "") {
    data.license[0]="Unlicense";
    licenseValue = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }

  return licenseValue;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${licenseBadge(data)}

## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  To install the necessary dependencies please run the following command: 
  > ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests please run the following command:
  > ${data.tests}

  ## License

  This project is licenced under the  "${data.license[0]}" license.

  ${licenseBadge(data)}

  ## Questions

  For any questions regarding this repo, please contact me directly at ${data.email}. You can find more of my work at [${data.github}
  ](https://github.com/${data.github}/).
 
`;
}

module.exports = generateMarkdown;
