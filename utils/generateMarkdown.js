// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if (license === 'IBM') {
    badge = '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
  } else if (license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'ISC') {
    badge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
  } else {
    badge = '';
  }
  return badge;
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license === 'IBM') {
    licenseLink = '[IBM license](https://www.ibm.com/about/software-licensing/licensing/license_information_documents)';
  } else if (license === 'MIT') {
    licenseLink = '[MIT license](https://www.mit.edu/~amini/LICENSE.md)';
  } else if (license === 'ISC') {
    licenseLink = '[ISC license](https://www.isc.org/licenses/)';
  } else {
    licenseLink = '';
  }
  return licenseLink;

  }

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderedLicense;
  if (license !== 'none') {
    renderedLicense = `## License\n This application is covered under ${license} license.\n
    Here is a link for more information about this license ${renderLicenseLink(license)}\n`
  }
  return renderedLicense;
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  let displayBadge;
  if (renderLicenseSection(data.license) === '') {
    displayBadge = '';
  } else {
    displayBadge = `${renderLicenseBadge(data.license)}`;
  }

  return `# ${data.title}
  ${displayBadge}
  ## description
  ${data.description}
  ## table of contents
  * [Description](#description)
  * [Installations](#installations)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  

  ## installations
  ${data.installations}
  ## usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## contribution
  ${data.contribution}
  ## test
  ${data.test}
  ## questions
  Github profile- ${data.github}. Link to profile [Github profile](https://github.com/${data.github}).\n
  For any other questions you can reach me at ${data.email}

`;
}

module.exports = generateMarkdown;
