/**
 * Immutable: something can't be modified after it was created
 * Reassignment !== Mutability (const doesn't allow reassignment, but that doesn't mean that a const is immutable)
 */

const part = 'someString'.slice(0, 2); // (immutable operation: slice doesn't change the original string)
console.log(part);

/**
 * Changing a property of an object is a mutable operation
 * Prevent mutating an object: Object.freeze(myObj)
 */
const originalObj = { id: '🍟', name: 'Jumbo Fries', price: 199 };

originalObj.id = '😎'; // everything fine

const frozenObj = Object.freeze(originalObj);
frozenObj.id = '😈'; // doesn't work, because the object is frozen

console.log(originalObj);
console.log(frozenObj);
