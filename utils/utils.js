//get products from store api
export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  if (!data) {
    return;
  }

  return data;
};

//get a product by id
export const getProductById = async (id) => {
  const data = await getProducts();

  if (!data) {
    return;
  }

  return data.find((product) => product.id === id);
};
