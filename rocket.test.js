
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

      // act, assert
      rocket.liftOff();
      expect(rocket.flying).toEqual(true);

      rocket.liftOff()
      expect(rocket.flying).toEqual(true);
    });


    test('returns false if the rocket is initialized as flying', () => {
      // arrange
      let rocket = new Rocket({ flying: true });

      // act
      rocket.liftOff();

      // assert
      expect(rocket.liftOff()).toBe(false);
      expect(rocket.flying).toEqual(true);
    });

  });



  describe('land', () => {
    test('sets flying to true when initialized with default values', () => {
      // arrange
      let rocket = new Rocket();

      // act, assert
      rocket.liftOff();
      expect(rocket.flying).toEqual(true);

      rocket.land()
      expect(rocket.flying).toEqual(false);
    });


    test('returns false if the rocket is already flying', () => {
      // arrange
      let rocket = new Rocket({ flying: true });

      // act
      rocket.liftOff();

      // assert
      expect(rocket.liftOff()).toBe(false);
      expect(rocket.flying).toEqual(true);
    });
  });



  describe('status', () => {
    test('returns `Rocket {name} is ready for liftoff!` when initialized with default values', () => {
      // arrange
      let rocket = new Rocket();

      // act
      let result = rocket.status();

      // assert
      expect(result).toEqual(`Rocket ${rocket.name} is ready for liftoff!`);
    });


    test('returns `Rocket {name} is flying through the sky!` if the rocket is flying', () => {
      // arrange
      let rocket = new Rocket({ flying: true });

      // act
      rocket.liftOff();
      let result = rocket.status();

      // assert
      expect(result).toEqual(`Rocket ${rocket.name} is flying through the sky!`)
    });


    test('returns `Rocket {name} is ready for liftoff!` if the rocket has landed.', () => {
      // arrange
      let rocket = new Rocket();

      // act
      rocket.liftOff();
      rocket.land();
      let result = rocket.status();

      // assert
      expect(result).toEqual(`Rocket ${rocket.name} is ready for liftoff!`);
    });
  });
  


  describe('sendCodedSignal', () => {
    test('send \'boop\' when nothing is passed in', () => {
      // arrange
      let rocket = new Rocket();

      // act
      rocket.sendCodedSignal();

      // assert
      expect(rocket.sendCodedSignal()).toEqual('boop');
    });


    test('send \'beep\' when messageCode < 10', () => {
      // arrange
      let rocket = new Rocket();

      // assert
      expect(rocket.sendCodedSignal(9)).toEqual('beep');
      expect(rocket.sendCodedSignal(Math.floor(Math.random() * 10))).toEqual('beep');

      expect(rocket.sendCodedSignal(19)).not.toBe('beep');
    });


    test('send \'beep beep\' when messageCode < 10 and flying is true', () => {
      // arrange
      let rocket = new Rocket({ flying: true });

      // assert
      expect(rocket.sendCodedSignal(9)).toBe('beep beep');
    });


    test('send \'boop boop boop\' when messageCode > 10 and flying is true', () => {
      // arrange
      let rocket = new Rocket();

      // act
      rocket.liftOff();

      // assert
      expect(rocket.sendCodedSignal('10')).toBe('boop boop boop');
      expect(rocket.sendCodedSignal(Math.floor(Math.random() * 100))).toEqual('boop boop boop');
    });


    test('send \'boop boop boop\' when messageCode > 10 and ship has landed', () => {
      // arrange
      let rocket = new Rocket();

      // act
      rocket.liftOff();
      rocket.land();

      // assert
      expect(rocket.sendCodedSignal('10')).toBe('boop beep beep');
      expect(rocket.sendCodedSignal(Math.floor(Math.random() * 100))).toEqual('boop beep beep');
    });
    

    test('send \'boop beep beep\' when messageCode > 10 and flying is false', () => {
      // arrange
      let rocket = new Rocket();

      // assert
      expect(rocket.sendCodedSignal('10')).toBe('boop beep beep');
      expect(rocket.sendCodedSignal(Math.floor(Math.random() * 100))).toEqual('boop beep beep');
    });
  });
});
