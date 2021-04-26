const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);

// function declaration
function getItemName(item) {
  return item.name;
}
console.log(items.map(getItemName));

// function expression (we assign the function to a variable)
// -> doesn't matter if it's named or not
const getItemNameExpression = function (item) {
  return item.name;
};
console.log(items.map(getItemNameExpression));

// anonymous function (can't be reaccessed after it's created)
// -> it could even be named and still be an anonymous function
console.log(
  items.map(function (item) {
    return item.name;
  })
);

// lambda function: the function is passed to be used as data elsewhere in the
// application (we are not calling the function directly - we pass it as an
// argument to another function)

// lambda expression (lamda function assigned to a variable)
const getItemNameExp = (item) => item.name;
console.log(items.map(getItemNameExp));

// if we use the "function" keyword and/or name the function, it will not be
// considered a lambda function - so in JS, only arrow functions are lambda
// functions
