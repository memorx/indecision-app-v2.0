console.log('utils.js is running');

const square = (x) => x * x;
// or
export const add = (a, b) => a + b;

const substract = (a, b) => a - b;

export { square, substract as default };



// exports - default export - names exports
