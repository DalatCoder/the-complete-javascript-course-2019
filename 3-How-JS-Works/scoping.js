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
   }
 }

 