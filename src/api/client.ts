import productData from "./product-data-stub.json";

export async function fetch(endpoint: string) {
  // Simulate network request
  if (endpoint === "/products") {
    return productData;
  }
}
