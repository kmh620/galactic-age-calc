
class Age {
  constructor(age, gender) {
    this.age = age,
    this.gender = gender
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


  lifeEx() {
    let earthEx = 0;
    if (this.gender === 'f') {
      earthEx += 81.6
    } else {
      earthEx += 76.9
    }
    return earthEx;
  }


}

export { Age };
