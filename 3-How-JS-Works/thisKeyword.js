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
    console.log(2016 - this.yearOfBirth);

    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
};

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984,
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();


