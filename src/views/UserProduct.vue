<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '../stores/productsStore';
import cartStore from '../stores/cartStore';

export default {
  data() {
    return {
      qty: 1,
    };
  },
  methods: {
    ...mapActions(productsStore, ['getProduct']),
    ...mapActions(cartStore, ['addToCart']),
    addQty() {
      if (this.qty < 20) this.qty += 1;
    },
    subQty() {
      if (this.qty > 1) this.qty -= 1;
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.getProduct(id);
  },
  computed: {
    ...mapState(productsStore, ['currentProduct']),
    ...mapState(cartStore, ['carts']),
  },
};
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <RouterLink to="/products">產品列表</RouterLink>
      </li>
      <li
        class="breadcrumb-item active"
        aria-current="page"
      >{{ this.currentProduct.title }}</li>
    </ol>
  </nav>
  <h2>
    <span>{{ this.currentProduct.title }}</span>
  </h2>
  <div class="row">
    <div class="col-sm-6">
      <img
        class="primary-image"
        :src="this.currentProduct.imageUrl"
        alt=""
      />
    </div>
    <div class="col-sm-6">
      <span class="badge bg-primary rounded-pill mb-2">{{
        this.currentProduct.category
      }}</span>
      <p>商品描述：{{ this.currentProduct.content }}</p>
      <p>商品內容：{{ this.currentProduct.description }}</p>
      <del class="h6">原價 {{ this.currentProduct.origin_price }} 元</del>
      <div class="h5">現在只要 {{ this.currentProduct.price }} 元</div>
      <div>
        <div class="input-group w-50 my-4">
          <button
            type="button"
            class="btn btn-secondary"
            @click.prevent="subQty()"
            :disabled="qty === 1"
          >
            -
          </button>
          <input
            type="number"
            class="form-control"
            min="1"
            :value="qty"
            readonly
          />
          <button
            type="button"
            class="btn btn-secondary"
            @click.prevent="addQty()"
            :disabled="qty === 20"
          >
            +
          </button>
        </div>
        <button
          type="button"
          class="btn btn-primary me-4"
          @click.prevent="
            addToCart(this.currentProduct.id, this.$router.push, this.qty)
            "
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
  <template
    v-for="(image, index) in this.currentProduct.imagesUrl"
    :key="index"
  >
    <img
      :src="image"
      alt=""
      class="images mt-2 me-2"
    />
  </template>
</template>

<style>
img {
  object-fit: contain;
  max-width: 100%;
}

.primary-image {
  height: 600px;
}

.images {
  height: 200px;
}

li a {
  text-decoration: none;
}
</style>
