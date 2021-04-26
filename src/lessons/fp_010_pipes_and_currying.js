/*
 * Pipe function:
 * - The opposite of a compose function
 * - Pipe calls left to right, instead of right to left like compose
 */

// the curry function
const curry = (fn) => (...args) => {
  if (args.length >= fn.length) {
    return fn.apply(null, args);
  }
  return curry(fn.bind(null, ...args));
};

// the pipe function (same as compose, except that we reduce left to right
// instead of right to left)
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

// the lambda functions
const split = curry((separator, string) => string.split(separator));
const map = curry((fn, array) => array.map(fn));
const join = curry((separator, string) => string.join(separator));
const toLowerCase = (x) => x.toLowerCase();

// Cool piping, with a natural order :)
const slugify = pipe(split(' '), map(toLowerCase), join('-'));

console.log(slugify('Ultimate Courses'));
console.log(slugify('Ultimate JavaScript'));
console.log(slugify('Ultimate Coding'));
