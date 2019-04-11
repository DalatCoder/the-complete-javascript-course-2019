/**
 * CODING CHALLENGE 2
 */

 function calculateTip(money) {
  var tipPercent;
  if (money < 50) {
    tipPercent = 0.2;
  } else if (money < 200) {
    tipPercent = 0.15;
  } else {
    tipPercent = 0.1;
  }
  return tipPercent * money;
 }

 var tips = [];
 var total = [];

 tips.push(calculateTip(124));
 tips.push(calculateTip(48));
 tips.push(calculateTip(258));

 total.push(tips[0] + 124);
 total.push(tips[1] + 48);
 total.push(tips[2] + 268);

 console.log(tips);
 console.log(total);

 