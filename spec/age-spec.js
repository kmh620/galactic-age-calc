
import { Age } from './../src/age';

describe('Age', function() {

  it('should create a new Age object', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.age).toEqual(28);
  });

  it('should create a new Date object', function() {
    let newAge = new Age(28, 'f');
    expect((newAge.date).getMonth()).toEqual(0);
  });

  it('should calculate age on Mercury', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.ageConversionMercury()).toEqual('116.67');
  });

  it('should calculate age on Venus', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.ageConversionVenus()).toEqual('45.16');
  });

  it('should calculate age on Mars', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.ageConversionMars()).toEqual('14.89');
  });

  it('should calculate age on Jupiter ', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.ageConversionJupiter()).toEqual('2.36');
  });

  it('should calculate avg life expectancy for Earth', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.lifeExEarth()).toEqual(81.6);
  });

  it('should return expected years left to live & year of death on Mercury', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.timeLeftMer()).toEqual([223, 2242]);
  });

  it('should return expected years left to live & year of death on Venus', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.timeLeftV()).toEqual([86, 2105]);
  });

  it('should return expected years left to live & year of death on Mars', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.timeLeftMa()).toEqual([28, 2047]);
  });

  it('should return expected years left to live & year of death on Jupiter', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.timeLeftJ()).toEqual([4, 2023]);
  });

  it('should return expected years left to live & year of death on Earth', function() {
    let newAge = new Age(28, 'f');
    expect(newAge.timeLeftE()).toEqual([53,2072]);
  });

});
