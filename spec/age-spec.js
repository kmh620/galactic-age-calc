
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

  it('should return expected years left to live & year of death on Mercury', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftMer()).toEqual([223, 2242]);
  });

  it('should return  years user has surpassed life expectancy on Mercury', function() {
    let newAge = new Age(98, 1);
    expect(newAge.timeLeftMer()).toEqual("You have lived 68 years past your life expectancy!");
  });

  it('should return expected years left to live & year of death on Venus', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftV()).toEqual([86, 2105]);
  });

  it('should return expected years left to live & year of death on Mars', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftMa()).toEqual([28, 2047]);
  });

  it('should return expected years left to live & year of death on Jupiter', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftJ()).toEqual([4, 2023]);
  });

  it('should return expected years left to live & year of death on Earth', function() {
    let newAge = new Age(28, 1);
    expect(newAge.timeLeftE()).toEqual([53,2072]);
  });

  it('should return  years user has surpassed life expectancy on Earth', function() {
    let newAge = new Age(98, 1);
    expect(newAge.timeLeftE()).toEqual("You have lived 16 years past your life expectancy!");
  });

  it('should return  message if they have no more years left', function() {
    let newAge = new Age(81.6, 1);
    expect(newAge.timeLeftE()).toEqual("You will die this Year!");
  });

});
