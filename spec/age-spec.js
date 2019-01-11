
describe('Age', function() {
  //tests written to fail
  it('should create a new Age object', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.age).toEqual(29);
  });

  it('should calculate age on Mercury', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.conversion()).toEqual(28);
  });

  it('should calculate age on Venus', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.conversion()).toEqual(28);
  });

  it('should calculate age on Mars', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.conversion()).toEqual(28);
  });

  it('should calculate age on Jupiter ', function() {
    let newAge = new Age(28, 'f', 'usa');
    expect(newAge.conversion()).toEqual(28);
  });

  it('should calculate avg life expectancy', function() {
    let newAge = new Age(28, 'f', 'usa');
    //81.6 === true
    expect(newAge.lifeEx()).toEqual(80);
  });

});
