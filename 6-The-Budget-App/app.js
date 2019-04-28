// BUDGET CONTROLLER
var budgetController = (function() {

  // budgetController

})();

// UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var DOMstrings = UICtrl.getDOMstrings();
  var ctrlAddItem = function() {
 
    // 1. Get the field input data
    var input = UICtrl.getInput();
    console.log(input);

    // 2. Add the item to the budgetController

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

  }

  document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);

