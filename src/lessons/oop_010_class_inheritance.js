/*
 * Inheritance:
 * - Strategy to share properties / members across different classes without
 *   repeating them all over the place
 * - Use "super" to call the super constructor
 * - Under the hood, the prototype will be used, but JS takes care of that
 * - Inspect e.g. a Food instance: __proto__ is set to Product
 */

class Cart {
  #items;

  constructor(items = []) {
    this.value = items;
  }

  get count() {
    return this.value.length;
  }

  set value(items) {
    this.#items = Object.freeze(items);
  }

  get value() {
    return Object.freeze(this.#items);
  }

  add(item) {
    this.value = [...this.value, item];
  }

  remove(id) {
    this.value = this.value.filter((item) => item.id !== id);
  }
}

// base class
class Product {
  id;
  name;
  price;

  /*
   * Side node:
   * - nothing stops us from instanciating Product directly - Even if
   *   we don't want to allow that
   * - This is what abstract classes are for, which unfortunately don't exist in
   *   JS (but in TypeScript they do)
   */
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  get displayName() {
    return `${this.id} ${this.name}`;
  }
}

// extending product
class Food extends Product {
  extras;

  constructor(id, name, price, extras = []) {
    super(id, name, price); // calling the super constructor
    this.extras = extras;
  }
}

// extending product
class Drink extends Product {
  size;

  constructor(id, name, price, size) {
    super(id, name, price); // calling the super constructor
    this.size = size;
  }
}

const myCart = new Cart();
const hotdog = new Food('🌭', 'Posh Dog', 399, ['mustard']);
const burger = new Food('🍔', 'Happy Burger', 499, ['bacon', 'pickle']);
const smallDrink = new Drink('🥤', 'Big Slurp', 199, 'small');
const mediumDrink = new Drink('🥤', 'Big Slurp', 299, 'medium');
const largeDrink = new Drink('🥤', 'Big Slurp', 399, 'large');

myCart.add(hotdog);
myCart.add(burger);
myCart.add(smallDrink);
myCart.add(mediumDrink);
myCart.add(largeDrink);

console.log(myCart);

// the prototype chain is respected
console.log(hotdog);
console.log(hotdog.displayName);
console.log(hotdog instanceof Product);
console.log(hotdog instanceof Food);
console.log(hotdog instanceof Drink);

// the prototype chain is respected
console.log(smallDrink);
console.log(smallDrink.displayName);
console.log(smallDrink instanceof Product);
console.log(smallDrink instanceof Food);
console.log(smallDrink instanceof Drink);
