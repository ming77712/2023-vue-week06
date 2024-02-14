<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      axios
        .post(`${VITE_URL}/api/user/check`)
        .then(() => {
          this.checkSuccess = true;
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      this.$router.push('/');
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );

    axios.defaults.headers.common.Authorization = token;

    this.checkLogin();
  },
};
</script>
<template>
  <h2 class="text-center">你現在在後台頁面</h2>
  <nav class="mb-4">
    <RouterLink to="/admin/products">產品列表</RouterLink> |
    <RouterLink to="/admin/orders">訂單列表</RouterLink> |
    <RouterLink to="/">回到前台</RouterLink> |
    <a
      href="#"
      @click.prevent="signout"
    >登出</a>
  </nav>
  <div class="container">
    <RouterView v-if="checkSuccess" />
  </div>
</template>
