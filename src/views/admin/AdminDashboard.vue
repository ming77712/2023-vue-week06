<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

const sweetMessage = {
  icon: '',
  title: '',
  showConfirmButton: false,
  timer: 1500,
};

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
      // document.cookie = "hexToken=;expires=;";
      this.setSweetMessageSuccess('已登出');
      Swal.fire(sweetMessage);
      setTimeout(() => {
        this.$router.push('/login');
      }, 1500);
    },
    setSweetMessageSuccess(res) {
      this.sweetMessage.icon = 'success';
      this.sweetMessage.title = res;
      this.sweetMessage.timer = 1500;
    },
    setSweetMessageError(err) {
      this.sweetMessage.icon = 'error';
      this.sweetMessage.title = err;
      this.sweetMessage.timer = 2500;
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
