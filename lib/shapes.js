// Shape class utilizes constructor to define what it means to be a shape
class Shape {
    constructor() {
      this.color = "";
    }
    // Shape class takes in setColor function
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // Triangle class inherits properties defined in Shape class
  class Triangle extends Shape {
    render() {
      // Returns polygon with color input
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
  }
  
  // Square class inherits properties defined in Shape class
  class Square extends Shape {
    render() {
      // Returns polygon with color input
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
  }
  
  // Circle class inherits properties defined in Shape class
  class Circle extends Shape {
    render() {
      // Returns polygon with color input
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
  };
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };