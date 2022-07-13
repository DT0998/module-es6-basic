// import modules
// import {addToCart,totalPrice as price,tq} from './shoppingCart.js';
// addToCart('Bread', 5);
// console.log(price,tq);
console.log('importing modules');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice);
import add, { cart } from './shoppingCart.js';
add('pizza', 5);
add('Bread', 5);
add('apple', 5);

console.log(cart);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

const lastPost2 = await getLastPost();
console.log(lastPost2);