import dbConnect from "@/db/connect";
import Product from "@/db/models/product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    console.log("Hello");
    const products = await Product.find();
    return response.status(200).json(products);
  } else {
    response.status(405).json({ status: "Method not allowed." });
  }
}
