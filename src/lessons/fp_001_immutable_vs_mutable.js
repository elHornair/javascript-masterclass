const originalObj = { id: '🍟', name: 'Jumbo Fries', price: 199 };

originalObj.id = '😎'; // everything fine

const frozenObj = Object.freeze(originalObj);
frozenObj.id = '😈'; // doesn't work, because the object is frozen

console.log(originalObj);
console.log(frozenObj);
