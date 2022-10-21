const PI = 3.14159;

const add = (x, y) => x * y;
const square = x => x * x;

const noExport = null;

// Export as one object
const math = {
    add: add,
    square: square,
    PI: PI
}

//  Exports

// Atomic
module.exports.add = add;
module.exports.square = square;
module.exports.PI = PI;

// One Object
module.exports = math;

// Upon Creation
module.exports.PI = 3.14159;
module.exports.add = (x, y) => x * y;
module.exports.square = x => x * x;

// Shortcut
exports.square = square; // === module.exports.square = square;