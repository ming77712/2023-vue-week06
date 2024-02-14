import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('productsStore', {
  state: () => ({
    products: [],
    currentProduct: {},
  }),
  actions: {
    getAllProduct() {
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProduct(productId) {
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${productId}`)
        .then((res) => {
          this.currentProduct = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
