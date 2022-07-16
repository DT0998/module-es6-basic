// import modules
// import {addToCart,totalPrice as price,tq} from './shoppingCart.js';
// addToCart('Bread', 5);
// console.log(price,tq);
console.log('importing modules');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice);
// import add, { cart } from './shoppingCart.js';
// add('pizza', 5);
// add('Bread', 5);
// add('apple', 5);

// console.log(cart);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost: ${shippingCost})`
    );
  };
  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

// export.addToCart = (product, quantity) => {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart (shipping cost: ${shippingCost})`);
// };
// const { addToCart } = require("./shoppingCart.js");
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'milk', quantity: 2 },
  ],
  user: {
    loggedIn: true,
  },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state)
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

