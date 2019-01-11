
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
  //
  // lifeExMercury() {
  //   let mercuryEx = ;
  //
  //   return mercuryEx;
  // }
  //
  // lifeExVenus() {
  //   let venusEx = 0;
  //
  //
  //   return venusEx;
  // }
  //
  // lifeExMars() {
  //   let marsEx = 0;
  //
  //
  //   return marsEx;
  // }
  //
  // lifeExJupiter() {
  //   let jupiterEx = 0;
  //
  //
  //   return jupiterEx;
  // }

  timeLeft() {
    let inputDate = this.date;
    let yearsLeft = (this.lifeExEarth() - this.age);
    let deathDate = new Date(inputDate.getFullYear() + yearsLeft);


    return deathDate;

  }




}

export { Age };
