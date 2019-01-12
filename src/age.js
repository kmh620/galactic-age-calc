
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

    if (this.gender === 1) {
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
    let yearsOver = Math.floor(yearsLeft * -1);

    if (yearsLeft === 0) {
      return "You will die this Year!";
    } else if (yearsLeft < 0){
      return `You have lived ${yearsOver} years past your life expectancy!`;
    } else if(yearsLeft > 0) {
      return Math.floor(yearsLeft);
    }
  }

  timeLeftMer() {
    let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let merEx = (lifeExpect / 0.24).toFixed(2);
    let yearsLeftMer =  merEx - this.ageConversionMercury();
    let deathDateMer = inputDate.getFullYear() + yearsLeftMer;
    let yearsOverMer = Math.floor(yearsLeftMer * -1);

    if (yearsLeftMer === 0) {
      return "You will die this Year!";
    } else if (yearsLeftMer < 0){
      return `You have lived ${yearsOverMer} years past your life expectancy!`;
    } else {
      return Math.floor(yearsLeftMer);
    }
  }

  timeLeftV() {
    let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let vEx = (lifeExpect / 0.62).toFixed(2);
    let yearsLeftV =  vEx - this.ageConversionVenus();
    let deathDateV = inputDate.getFullYear() + yearsLeftV;
    let yearsOverV = Math.floor(yearsLeftV * -1);

    if (yearsLeftV === 0) {
      return "You will die this Year!";
    } else if (yearsLeftV < 0){
      return `You have lived ${yearsOverV} years past your life expectancy!`;
    } else {
      return Math.floor(yearsLeftV);
    }
  }

  timeLeftMa() {
    let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let maEx = (lifeExpect / 1.88).toFixed(2);
    let yearsLeftMa =  maEx - this.ageConversionMars();
    let deathDateMa = inputDate.getFullYear() + yearsLeftMa;
    let yearsOverMa = Math.floor(yearsLeftMa * -1);

    if (yearsLeftMa === 0) {
      return "You will die this Year!";
    } else if (yearsLeftMa < 0){
      return `You have lived ${yearsOverMa} years past your life expectancy!`;
    } else {
      return Math.floor(yearsLeftMa);
    }
  }

  timeLeftJ() {
    let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let jEx = (lifeExpect / 11.86).toFixed(2);
    let yearsLeftJ =  jEx - this.ageConversionJupiter();
    let deathDateJ = inputDate.getFullYear() + yearsLeftJ;
    let yearsOverJ = Math.floor(yearsLeftJ * -1);

    if (yearsLeftJ === 0) {
      return "You will die this Year!";
    } else if (yearsLeftJ < 0){
      return `You have lived ${yearsOverJ} years past your life expectancy!`;
    } else {
      return Math.floor(yearsLeftJ);
    }
  }

  yearOfDeathE() {
    let inputDate = this.date;
    let yearsToGo = this.timeLeftE();
    let deathDateE = inputDate.getFullYear() + this.timeLeftE();

    //not working to fix year of death output
    // if(yearsToGo.isInteger === false ) {
    //   return "You should have already died...";
    // } else {
      return deathDateE;
    //}
  }

  yearOfDeathMer() {
    let inputDate = this.date;
    let deathDateMer = inputDate.getFullYear() + this.timeLeftMer();
    return deathDateMer;
  }

  yearOfDeathV() {
    let inputDate = this.date;
    let deathDateV = inputDate.getFullYear() + this.timeLeftV();
    return deathDateV;
  }

  yearOfDeathMa() {
    let inputDate = this.date;
    let deathDateMa = inputDate.getFullYear() + this.timeLeftMa();
    return deathDateMa;
  }

  yearOfDeathJ() {
    let inputDate = this.date;
    let deathDateJ = inputDate.getFullYear() + this.timeLeftJ();
    return deathDateJ;
  }
}

export { Age };
