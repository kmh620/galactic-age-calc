
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

    // time left for earth is deathDate, create option for all planets??
    return Math.floor(deathDate);

  }

  timeLeftMer() {
    //let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let merEx = (lifeExpect / 0.24).toFixed(2);
    let yearsLeftMer =  merEx - this.ageConversionMercury();

    return Math.floor(yearsLeftMer);
    //223
    //deathdateMer  if  on earth??= inputDate.getFullYear()  + yearsLeftMer = 2242
  }

  timeLeftV() {
    //let inputDate = this.date;
    let lifeExpect = this.lifeExEarth();
    let vEx = (lifeExpect / 0.62).toFixed(2);
    let yearsLeftV =  vEx - this.ageConversionVenus();

    return Math.floor(yearsLeftV);
    //86
  }

  timeLeftMa() {
    let marsEx = 0;


    return marsEx;
  }

  timeLeftJ() {
    let jupiterEx = 0;


    return jupiterEx;
  }






}

export { Age };
