
import { Age } from './../src/age';

describe('Age', function() {

  it('should create a new Age object', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.age).toEqual(28);
  });

  it('should calculate age on Mercury', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.ageConversionMercury()).toEqual('116.67');
  });

  it('should calculate age on Venus', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.ageConversionVenus()).toEqual('45.16');
  });

  it('should calculate age on Mars', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.ageConversionMars()).toEqual('14.89');
  });

  it('should calculate age on Jupiter ', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.ageConversionJupiter()).toEqual('2.36');
  });
  //
  // it('should calculate avg life expectancy', function() {
  //   let newAge = new Age(28, 'f', 'usa');
  //   //81.6 === true
  //   expect(newAge.lifeEx()).toEqual(80);
  // });

});
