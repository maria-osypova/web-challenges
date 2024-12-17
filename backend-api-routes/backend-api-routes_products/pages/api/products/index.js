import { getAllProducts } from "/services/productServices.js";

export default function handler(request, response) {
  const products = getAllProducts();
  console.log(products);
  response.status(200).json(products);
}
