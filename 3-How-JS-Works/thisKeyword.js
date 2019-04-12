console.log(this); // window object

calculateAge(1985);

function calculateAge(uear) {
  console.log(2016 - year);
  console.log(this);
}

var john = {
  name: 'John',
  yearOfBirth: 1985,
  calculateAge: function() {
    console.log(this);
  }
}

john.calculateAge();


