
var a = 13;
first(); // Hoisting

console.log('Global: ' + this);

function first() {
  var b = 2;
  console.log('Local first function ' + this.first);
  console.log('Global scope: ' + this.third);
  second(); // Hoisting

  function second() {
    var c = 3;
    console.log('Local second function: ' + this.first);
    console.log('Global scope: ' + this.third);
    third();
  }
}

function third() {
  var d = 4;
  console.log('Global third function: ' + this.third);
}


