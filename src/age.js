
class Age {
  constructor(age, gender) {
    this.age = age,
    this.gender = gender,
    this.date = new Date();
  }

  ageConversionMercury() {
    const mercuryAge = (this.age / 0.24).toFixed(2);
    return mercuryAge;
  }

  ageConversionVenus() {
    const venusAge = (this.age / 0.62).toFixed(2);
    return venusAge;
  }

  ageConversionMars() {
    const marsAge = (this.age / 1.88).toFixed(2);
    return marsAge;
  }

  ageConversionJupiter() {
    const jupiterAge = (this.age / 11.86).toFixed(2);
    return jupiterAge;
  }

  lifeExEarth() {
    let earthEx = 0;

    if (this.gender === 'f') {
      earthEx += 81.6
    } else {
      earthEx += 76.9
    }
    return earthEx;
  }

  timeLeftE() {
    let inputDate = this.date;
    let yearsLeft = this.lifeExEarth() - this.age;
    let deathDate = inputDate.getFullYear() + yearsLeft;
    let yearsOver = yearsLeft * -1;

    if (yearsLeft === 0) {
      return "You will die this Year!";
    } else if (yearsLeft < 0){
      return "You have lived ${yearsOver} your life expectancy!";
    } else {
      return [Math.floor(yearsLeft), Math.floor(deathDate)];
    }
  }

  // var ages = timeLeftE();
  // var yearstogo = ages[0];
  // var deathyear = ages[1];

  timeLeftMer() {
    let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let merEx = (lifeExpect / 0.24).toFixed(2);
    let yearsLeftMer =  merEx - this.ageConversionMercury();
    let deathDateMer = inputDate.getFullYear() + yearsLeftMer;

    return [Math.floor(yearsLeftMer), Math.floor(deathDateMer)];
    //223
    //deathdateMer  if  on earth??=
    //2242
  }

  timeLeftV() {
    let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let vEx = (lifeExpect / 0.62).toFixed(2);
    let yearsLeftV =  vEx - this.ageConversionVenus();
    let deathDateV = inputDate.getFullYear() + yearsLeftV;

    return [Math.floor(yearsLeftV), Math.floor(deathDateV)];
    //86, 2105
  }

  timeLeftMa() {
    let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let maEx = (lifeExpect / 1.88).toFixed(2);
    let yearsLeftMa =  maEx - this.ageConversionMars();
    let deathDateMa = inputDate.getFullYear() + yearsLeftMa;
    return [Math.floor(yearsLeftMa), Math.floor(deathDateMa)];
    //28, 2047
  }

  timeLeftJ() {
    let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let jEx = (lifeExpect / 11.86).toFixed(2);
    let yearsLeftJ =  jEx - this.ageConversionJupiter();
    let deathDateJ = inputDate.getFullYear() + yearsLeftJ;
    return [Math.floor(yearsLeftJ), Math.floor(deathDateJ)];
    //4, 2023
  }




}

export { Age };
