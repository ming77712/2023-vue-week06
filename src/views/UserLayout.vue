<script>
import { mapState } from 'pinia';
import adminStore from '../stores/adminStore';

export default {
  computed: {
    ...mapState(adminStore, ['status']),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink
        to="/"
        class="navbar-brand fs-3"
      >遊日本</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav ms-auto">
          <RouterLink
            to="/products"
            class="nav-link fs-5"
          >推薦行程</RouterLink>
          <RouterLink
            to="/cart"
            class="nav-link fs-5"
          >購物車</RouterLink>
          <RouterLink
            to="/admin/products"
            class="nav-link fs-5"
            v-if="status"
          >後台管理</RouterLink>
          <RouterLink
            to="/login"
            class="nav-link fs-5"
            v-else
          >登入</RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <div class="container mt-3">
    <RouterView />
  </div>
</template>
