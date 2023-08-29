// Import required modules and classes
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function to generate SVG string based on user answers
function generateSVG(answers) {
  let svgString = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>`;
  
  // Generate shape based on user choice
  let shapeString, shapeChoice;
  if (answers.shape === "Triangle") {
    shapeString = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    shapeChoice = new Triangle();
  } else if (answers.shape === "Square") {
    shapeString = `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    shapeChoice = new Square();
  } else {
    shapeString = `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    shapeChoice = new Circle();
  }
  
  // Combine SVG shape and text
  svgString += `${shapeString}
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
  </g>
</svg>`;

  return svgString;
}

// Function to prompt the user for input
function promptUser() {
  inquirer
    .prompt([
      // Text prompt
      { type: "input", message: "Enter text for your logo (max 3 characters):", name: "text" },
      // Text color prompt
      { type: "input", message: "Enter text color:", name: "textColor" },
      // Shape choice prompt
      { type: "list", message: "Select a shape for your logo:", choices: ["Triangle", "Square", "Circle"], name: "shape" },
      // Shape color prompt
      { type: "input", message: "Enter shape color:", name: "shapeBackgroundColor" }
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Text must be 3 characters or less.");
        promptUser();
      } else {
        const svgString = generateSVG(answers);
        fs.writeFile("logo.svg", svgString, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Generated logo.svg");
          }
        });
      }
    });
}

// Start the promptUser function to initiate user input
promptUser();
