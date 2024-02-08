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
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      axios
        .post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken= ${token}; expires=${new Date(
            expired,
          )};`;
          this.setSweetMessageSuccess(res.data.message);
          Swal.fire(sweetMessage);
          setTimeout(() => {
            this.$router.push('/admin/products');
          }, 1500);
        })
        .catch((err) => {
          this.setSweetMessageError(err.response.data.message);
          Swal.fire(sweetMessage);
        });
    },
    setSweetMessageSuccess(res) {
      sweetMessage.icon = 'success';
      sweetMessage.title = res;
      sweetMessage.timer = 1500;
    },
    setSweetMessageError(err) {
      sweetMessage.icon = 'error';
      sweetMessage.title = err;
      sweetMessage.timer = 2500;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 my-3 font-weight-normal text-center">請先登入</h1>
      <div class="col-8">
        <form
          id="form"
          class="form-signin"
        >
          <div class="form-floating mb-3">
            <input
              v-model="user.username"
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button
            @click.prevent="login"
            class="btn btn-lg btn-primary w-100 mt-3"
            type="submit"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted text-center">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>
