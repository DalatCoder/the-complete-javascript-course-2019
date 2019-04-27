var budgetController = (function() {

  var x = 23;

  var add = function(a) {
    return a + x;
  }

  return {
    publicTest: function(b) {
      console.log(add(b));
      console.log(this);
    }
  }

})();

