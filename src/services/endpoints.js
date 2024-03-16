export const endpoints = Object.freeze({
  products: {
    getAllProducts: {
      method: "get",
      endpoint: "/products",
      token: "require", //
    },
  },
});
