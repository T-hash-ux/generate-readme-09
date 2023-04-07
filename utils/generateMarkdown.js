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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
