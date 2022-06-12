// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  
  `}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
    
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  
  `}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # Table of Contents
  <nav>
    <ul>
      <li>
        <a href="#description">Description</a>
      </li>
      <li>
        <a href="#installation">Installation</a>
      </li>
      <li>
        <a href="#usage">Usage</a>
      </li>
      <li>
        <a href="#license">License</a>
      </li>
      <li>
        <a href="#contributing">Contributing</a>
      </li>
      <li>
        <a href="#tests">Tests</a>
      </li>
      <li>
        <a href="#questions">Questions</a>
      </li>
    </ul>
  </nav>

  ## <h1 id="description">Description</h1>


  ## <h1 id="installation">Installation</h1>


  ## <h1 id="usage">Usage</h1>


  ## <h1 id="license">License</h1>


  ## <h1 id="contributing">Contributing</h1>


  ## <h1 id="tests">Tests</h1>


  ## <h1 id="questions">Questions</h1>

`;
}

module.exports = generateMarkdown;
