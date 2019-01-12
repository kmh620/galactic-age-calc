
import { Age } from './../src/age';

describe('Age', function() {

  it('should create a new Age object', function() {
    let newAge = new Age(28, 1);
    expect(newAge.age).toEqual(28);
  });

  it('should create a new Date object', function() {
    let newAge = new Age(28, 1);
    expect((newAge.date).getMonth()).toEqual(0);
  });

  it('should calculate age on Mercury', function() {
    let newAge = new Age(28, 1);
    expect(newAge.ageConversionMercury()).toEqual('116.67');
  });

  it('should calculate age on Venus', function() {
    let newAge = new Age(28, 1);
    expect(newAge.ageConversionVenus()).toEqual('45.16');
  });

  it('should calculate age on Mars', function() {
    let newAge = new Age(28, 1);
    expect(newAge.ageConversionMars()).toEqual('14.89');
  });

  it('should calculate age on Jupiter ', function() {
    let newAge = new Age(28, 1);
    expect(newAge.ageConversionJupiter()).toEqual('2.36');
  });

  it('should calculate avg life expectancy for Earth', function() {
    let newAge = new Age(28, 1);
    expect(newAge.lifeExEarth()).toEqual(81.6);
  });

  it('should return expected years left to live on Mercury', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftMer()).toEqual(223);
  });

  it('should return  years user has surpassed life expectancy on Mercury', function() {
    let newAge = new Age(98, 1);
    expect(newAge.timeLeftMer()).toEqual("You have lived 68 years past your life expectancy!");
  });

  it('should return expected years left to live on Venus', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftV()).toEqual(86);
  });

  it('should return expected years left to live on Mars', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftMa()).toEqual(28);
  });

  it('should return expected years left to live on Jupiter', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftJ()).toEqual(4);
  });

  it('should return expected years left to live on Earth', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftE()).toEqual(53);
  });

  it('should return  years user has surpassed life expectancy on Earth', function() {
    let newAge = new Age(98, 1);
    expect(newAge.timeLeftE()).toEqual("You have lived 16 years past your life expectancy!");
  });

  it('should return  message if they have no more years left', function() {
    let newAge = new Age(81.6, 1);
    expect(newAge.timeLeftE()).toEqual("You will die this Year!");
  });

  it('should return expected year of death on Earth', function() {
    let newAge = new Age(28, 1);
    expect(newAge.yearOfDeathE()).toEqual(2072);
  });

  // it('should return expected year of death on Earth if youve lived past avg expectancy', function() {
  //   let newAge = new Age(99, 1);
  //   expect(newAge.yearOfDeathE()).toEqual(2072);
  // });

  it('should return expected Earth year of death on Jupiter', function() {
    let newAge = new Age(28, 1);
    expect(newAge.yearOfDeathJ()).toEqual(2023);
  });
});
