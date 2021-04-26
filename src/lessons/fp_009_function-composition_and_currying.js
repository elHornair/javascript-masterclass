/*
 * Function composition:
 * - Like Lego blocks => We take multiple pieces and fit them together to make
 *   something bigger
 */

// the curry function
const curry = (fn) => (...args) => {
  if (args.length >= fn.length) {
    return fn.apply(null, args);
  }
  return curry(fn.bind(null, ...args));
};

// slugify: basic approach without function composition
// const slugify = 'Ultimate Courses'
//   .split(' ')
//   .map(x => x.toLowerCase())
//   .join('-');
// console.log(slugify);

// slugify: function composition
// => We have to read from right to left (first we split, then we map with toLowerCase,
//    then we join). Function composition is "inside out"
const split = curry((separator, string) => string.split(separator));
const map = curry((fn, array) => array.map(fn));
const join = curry((separator, string) => string.join(separator));
const toLowerCase = (x) => x.toLowerCase();

const slugify = (str) => join('-')(map(toLowerCase)(split(' ')(str))); // the program
console.log(slugify('Ultimate Courses')); // applying the program to some data

// slugify: function composition but with an awesome compose function
const compose = (...fns) => {
  // "compose" gets an array of functions ("fns") as a parameter
  // it then returns a function, that receives a string x as parameter
  return (x) => {
    // this function reduces the "fns" array as follows:
    // -> pass the result of one function as argument to the next function
    // -> start by applying x to the first function
    return fns.reduceRight((v, f) => f(v), x);
  };
};

// pretty cool... except that the order feels unnatural :)
const slugifyComposed = compose(join('-'), map(toLowerCase), split(' '));

console.log(slugifyComposed('Ultimate Courses'));
console.log(slugifyComposed('Ultimate JavaScript')); // easy to reuse
console.log(slugifyComposed('Ultimate Coding')); // easy to reuse
