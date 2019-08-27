
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // arrange
      let rocket = new Rocket();

      // assert
      expect(rocket.name).toBeTruthy();
      expect(rocket.colour).toBeTruthy();
      expect(rocket.flying).toEqual(false);
    });


    test("it should set the rocket's name, colour, and flying if provided", () => {
      // arrange
      let rocket = new Rocket({ name: 'Apollo', colour: 'Red', flying: true });

      // assert
      expect(rocket.name).toEqual('Apollo');
      expect(rocket.colour).toEqual('Red');
      expect(rocket.flying).toEqual(true);
    });
  });

  
  describe('liftOff', () => {
    test('sets flying to true when initialized with default values', () => {
      // arrange
      let rocket = new Rocket();

      // assert
      rocket.liftOff();
      expect(rocket.flying).toEqual(true);

      rocket.liftOff()
      expect(rocket.flying).toEqual(true);
    });

    test('returns false if the rocket is initialized as flying', () => {
      // arrange
      let rocket = new Rocket({ flying: true });

      // assert
      rocket.liftOff();
      expect(rocket.liftOff()).toBe(false);
      expect(rocket.flying).toEqual(true);
    });

  });

    

});
