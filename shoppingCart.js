// export module
console.log('Exporting module');
// block of code
console.log('start fetching data');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log("finished fetching data");
const shippingCost = 10;
export const cart = [];
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
