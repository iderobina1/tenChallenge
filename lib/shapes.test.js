const {Circle, Square, Triangle} = require("./shapes")


// Circle Shape
describe('Circle', () => {
    test('render is correct', () => {
      const shape = new Circle();
      let color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('render is correct', () => {
        const shape = new Square();
        let color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}">`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('render is correct', () => {
        const shape = new Triangle();
        let color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
      });
    });
    