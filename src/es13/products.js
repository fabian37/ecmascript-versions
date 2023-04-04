// import fetch from 'node-fetch'; opcional
const response = await fetch('https://api.escuelajs.co/api/v1/products');
export const products = await response.json();
