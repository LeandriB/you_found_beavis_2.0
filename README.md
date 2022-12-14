# You Found Beavis 2.0

## Contents

  - [User Story](#user_story)
  - [Acceptance Criteria](#acceptance_criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Attributions](#attributions)
  - [Questions](#questions)

## User Story

````
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
````

## Acceptance Criteria

````
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
````

## Installation

Run the following command in your terminal in order to install all the packages:

`npm install`

Start the node application by running: 

`npm start`

## Usage

![Preview](./public/assets/images/preview.png)

Link to [deployed](https://leandrib.github.io/you_found_beavis_2.0/) site.

## Contributing

In order to contribute, create a pull request and follow the steps listed below:

- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request

Following a code review, your feature will be merged.

## Tests

No testing protocols were implemented in this application

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application is licensed under the MIT License.

## Attributions

* Base of [Code](https://github.com/LeandriB/photo_port) from examples in Module 20.
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Reusing some styling from my first portfolio [website](https://github.com/LeandriB/personal_blog_website)
* How to make a button [downloadable](https://www.w3schools.com/tags/att_a_download.asp)
* [Bulma](https://bulma.io/documentation/overview/start/) for some of the styling
* [Formspree](https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-React-library#:~:text=The%20useForm%20React%20hook%20is,form%20in%20the%20Formspree%20dashboard.) with React
* [useState](https://bobbyhadz.com/blog/react-hook-usestate-called-conditionally) fix conditionally rendering error

## Questions

If you have any questions, please contact me at my [email](mailto:leandrikuyk@gmail.com?subject=%20Lets%20Collaborate). You can find more of my work on my GitHub at [LeandriB](https://github.com/LeandriB). 