import productData from "./product-data-stub.json";

export async function fetch(endpoint: string) {
  // Simulate network request
  if (endpoint === "/products") {
    await wait(1000 * 3);
    return productData;
  }
}

function wait(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
