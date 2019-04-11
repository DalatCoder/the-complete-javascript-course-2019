
var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

if (john.calcBMI() > mark.calcBMI())  {
  console.log(john.fullName + ' has a higher BMI of ' + john.BMI);
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI);
} else {
  console.log('They have the same BMI');
}


