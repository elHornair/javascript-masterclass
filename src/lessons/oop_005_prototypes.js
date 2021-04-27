/*
 * Prototype:
 * - Every object in JS has a prototype by default
 * - The prototype allows us to inherit props and behaviours from other objects
 * - The object prototype gives every object a bunch of methods and props, e.g.
 *   hasOwnProperty(), toString(), constructor, ...
 * - Property: "__proto__" (usually it's a good idea to not mess with it)
 * - Property "constructor": which constructor was used to create this object
 *   (e.g. Array())
 * - Using the object or array literal creates an object under the hood, so the
 *   literal is a fully fledged object
 * - Properties __proto__ vs prototype: __proto__ is the actual object that is
 *   used in the lookup chain to resolve methods, etc. (every object has it),
 *   prototype is the object that is used to build __proto__ when an object is
 *   created with new
 */

// proof that Array indeed inherits from Object
console.log([].__proto__.constructor); // => Array
console.log([].__proto__.__proto__.constructor); // => Object

// both are true because "instanceof" takes the prototype chain into account
console.log([] instanceof Array);
console.log([] instanceof Object);
