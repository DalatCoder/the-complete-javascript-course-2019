/** 
 * CODING CHALLENGE 5
*/

var johnHoliday = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  paids: [], 
  tipCalc: function() {
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        this.tips.push(.2);
      } else if (this.bills[i] < 200) {
        this.tips.push(.15);
      } else {
        this.tips.push(.1);
      }

      this.paids.push(this.bills[i] + this.bills[i] * this.tips[i]);
    }
    return this.paids;
  }
}

console.log(johnHoliday.tipCalc());
console.log(johnHoliday.bills);
console.log(johnHoliday.tips);

var markHoliday = {
  bills: [77, 375, 110, 45],
  tips: [],
  paids: [],
  tipCalc: function() {
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 100) {
        this.tips.push(.2);
      } else if (this.bills[i] < 300) {
        this.tips.push(.15);
      } else {
        this.tips.push(.25);
      }

      this.paids.push(this.bills[i] + this.bills[i] * this.tips[i]);
    }
    return this.paids;
  }
}

console.log(markHoliday.tipCalc());
console.log(markHoliday.bills);
console.log(markHoliday.tips);


