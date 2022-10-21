// Returned later for this
const cats = require('./Shelter');
console.log(cats);

// Imports everything
const math = require('./math');
console.log(math.PI);
console.log(math.square(9));

// Imports selectively
const { add, square } = require('./math');
console.log(add(2, 2));
console.log(square(3));