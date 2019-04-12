/**
 * Lecture scoping
 */

 // First scoping example

 var a = 'Hello!';
 first();

 function first() {
   var b = 'Hi!';
   second();

   function second() {
     var c = 'Hey';
     console.log(a + b + c);
     third();
   }
 }

 // Example to show the difference between execution stack and scope chain

 function third() {
   var d = 'John';
   // console.log(c);
   console.log(a+d);
 }

// Closure
function multipler(n) {
  return number => number * n;
}
var twice = multipler(2);
console.log(twice(5));



