// single line comments

/*
  multi line!
*/

var a = 63;
// let and const are block scoping delcarations, rather than function scoping declarations
let b = 2;
const c = 42;

// declating as a function
function a() {}

if (a > 10) {
  var a = 42;
  foo(a / 2);
}

function foo() {

}

var a = 10;

if (a > 5) {
  a = a * 2;
}

"falsy":
0
-0
false
null
undefined

for (a = 5; a < 10; a++) {
  console.log(a);
}
// a = 5 -- the inialization clause
// a < 10 -- conditional clause
// a++ -- update clause
a = 5;
while (true) {
  if (a >= 10) {
    break;
  }
  console.log(a);
  a = a + 1;
}
// how a for loop, or conceptually all loops work

function printAmount() {
  console.log( amount.toFixed(2));
}


 const SPENDING_THRESHOLD = 200;
 const TAX_RATE = 0.08;
 const PHONE_PRICE = 99.99;
 const ACCESSORY_PRICE = 9.99;

 var bank_balance = 303.91;
 var amount = 0;

 function calculateTax(amount) {
   return amount * TAX_RATE;
 }

// you're going to call this, because DRY
 function formatAmount(amount) {
   return "$" + amount.toFixed(2);
 }

// keep buying phones while you have money, spend till you have no more
 while(amount < bank_balance) {
  //  buy new phone
   amount = amount + PHONE_PRICE;
   if (amount < SPENDING_THRESHOLD){
     amount = amount + ACCESSORY_PRICE;
   }
 }

amount = amount + calculateTax(amount);

console.log(
  "Your Purchase: " + formatAmount(amount)
);
