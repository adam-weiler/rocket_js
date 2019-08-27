
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // arrange
      // Rocket(); //In Python.
      let rocket = new Rocket();

      // assert
      expect(rocket).toBeInstanceOf(Rocket);
    });


    // it('should set flying to true', () => {
    //   rocket = new Rocket();
    //   rocket.flying();
    //   expect(rocket.fly).toBe(true);


    test("it should set the rocket's name if provided", () => {
      // arrange
      // let rocket = new Rocket('Apollo', 'Red', false);

      let options = { name: 'Apollo' }
      let rocket = new Rocket(options);

      // assert
      expect(rocket.name).toEqual('Apollo');
    });
  });

  describe('liftOff', () => {
    // ...
  });

  // ...

});
