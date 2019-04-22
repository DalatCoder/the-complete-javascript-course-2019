var budgetController = (function() {
  
  var x = 23;

  var add = function(a) {
    return x + a;
  }

  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  }

})();

var UIController = (function() {

  // Add code later

})();

var controller = (function(budgetCtrl, UICtrl) {

  budgetCtrl.publicTest(5);

})(budgetController, UIController);