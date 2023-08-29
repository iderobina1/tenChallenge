# SVG-Logo-Maker

tenChallegne 

## Table of Contents

 * [Description](#description)

 * [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

 * [Screenshots](#screenshots)

 * [Technologies-Used](#technologies-used)

 * [Installation](#installation)

 * [Usage-Information](#usage-information)

 * [Contribution-Guidelines](#contribution-guidelines)

 * [Test-Instructions](#test-instructions)

 * [Questions](#questions)

## Description

App to create simple logo. It utilizes inquirer to prompt the user within the command line for how they would like their logo to look like. Once the user answers all prompts, then an SVG file is written using their selections to generate a logo.

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1LLAhUArgzn2YfI_or0DXp4N9ZcsTPUdZ/view

## Screenshots

Logo Generation

![Screenshot1-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142589-86370721-ab54-4ff4-af4d-46a40fbb5d5f.png)

![Screenshot2-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142612-728f43cb-174a-4370-9847-e3ebb10ee23b.png)

![Screenshot3-week-10-challenge](https://user-images.githubusercontent.com/120127903/232144018-62741d39-3e09-492c-be82-125e38f91521.png)

Examples of Generated Logos

<img width="226" alt="Screenshot4-week-10-challenge" src="https://user-images.githubusercontent.com/120127903/232142654-9a5a9937-e831-4838-86a1-4323c7b9cc39.png">

<img width="245" alt="Screenshot5-week-10-challenge" src="https://user-images.githubusercontent.com/120127903/232142705-29cd92d9-1c12-46ce-a81a-64893ac15a00.png">

<img width="214" alt="Screenshot6-week-10-challenge" src="https://user-images.githubusercontent.com/120127903/232142727-5c9ce441-1ca7-443a-bb5f-391b3f0003cf.png">

## Technologies Used

This project is powered by Node.js v16.20.1, utilizes inquirer v8.2.4 (node package manager), and file system module (node package manager). It also employs jest v29.5.0 (node package manager) for the unit testing conducted in this application. 

## Installation

1. Clone the repo:
   git clone https://github.com/rmessett15/SVG-Logo-Maker.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install inquirer and jest directly from the command line, to do so the command for inquirer will be npm i inquirer@8.2.4 to install v8.2.4 of the inquirer, and npm i jest to install the latest version of jest).

6. To run the application, within the terminal, type the command node index.js.


## Usage Information

To run this application, use the command line to navigate to the directory of the application, install all dependencies (npm i), then type the command node index.js. You will then be taken through a series of questions. Once all questions have been answered properly, a message will display to the command line telling you your logo has been generated. Find your new logo in the newly generated SVG file.

For unit testing instructions, navigate to the Test Instructions section.

## Contribution Guidelines

Edx +TEC Bootcamp 

## Test Instructions

To run unit testing, open the terminal, and use the command npm run test.

As of now there is one test suite with three tests. The test suite is checking for a render() method to return a string for the corresponding SVG file with the given shape color.

![Screenshot7-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142736-a2ed7de2-b924-4536-9f51-e9c6cd5fb1db.png)

![Screenshot8-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142745-dfe8aab8-4da0-4e8f-89b6-d153f2024825.png)

![Screenshot9-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142780-b9158992-dced-4da8-be89-e828b81f6023.png)



## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/iderobina1)

<a href="mailto:iderobina@gmail.com">iderobina@gmail.com</a>
