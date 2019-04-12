
/**
 * CODING CHALLENGE 4
 */

 var mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  massMark: 70,
  heightMark: 1.8,
  BMIMark: function() {
    this.BMI = this.massMark / (this.heightMark * this.heightMark);
    return this.BMI;
  }
 };

 var john = {
  firstName: 'John',
  lastName: 'Smith',
  massJohn: 81,
  heightJohn: 1.5,
  BMIJohn: function() {
    this.BMI = this.massJohn / (this.heightJohn * this.heightJohn);
    return this.BMI;
  }
 };

var markBMI = mark.BMIMark();
var johnBMI = john.BMIJohn();

if (markBMI > johnBMI) {
  console.log('Mark\'s BMI is higher than John\'s');
} else if (johnBMI > markBMI) {
  console.log('John\'s BMI is higher than Mark\'s');
} else {
  console.log('John and Mark have the same BMI.');
}

