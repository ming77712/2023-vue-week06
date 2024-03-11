import { defineStore } from 'pinia';
import axios from 'axios';
import sweetMessageStore from './sweetMessageStore';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('productsStore', {
  state: () => ({
    products: [],
    currentProduct: {},
  }),
  actions: {
    getAllProduct() {
      const { toastMessage } = sweetMessageStore();
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          toastMessage.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
    getProduct(productId) {
      const { toastMessage } = sweetMessageStore();
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${productId}`)
        .then((res) => {
          this.currentProduct = res.data.product;
        })
        .catch((err) => {
          toastMessage.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
  },
});
