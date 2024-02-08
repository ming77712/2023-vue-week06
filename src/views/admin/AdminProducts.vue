<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import ProductAdminModal from '../../components/productAdminModal.vue';
import ProductDeleteModal from '../../components/productDeleteModal.vue';
import Pagination from '../../components/paginationComponent.vue';
import UploadImgModal from '../../components/uploadImgModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

const sweetMessage = {
  icon: '',
  title: '',
  showConfirmButton: false,
  timer: 1500,
};

export default {
  data() {
    return {
      productModal: null,
      delProductModal: null,
      uploadImgModal: null,
      currentProduct: {
        imagesUrl: [],
      },
      products: [],
      pagination: {},
      isNew: false,
    };
  },
  methods: {
    getAllProduct(page = 1) {
      axios
        .get(
          `${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`,
        )
        .then((res) => {
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
        })
        .catch((err) => {
          this.setSweetMessageError(err.data.message);
          Swal.fire(sweetMessage);
        });
    },
    getProductModal(productModel) {
      this.productModal = productModel;
    },
    getProductDeleteModal(productDeleteModel) {
      this.delProductModal = productDeleteModel;
    },
    getUploadImgModal(uploadImgModel) {
      this.uploadImgModal = uploadImgModel;
    },
    refreshProducts() {
      this.getAllProduct();
    },
    openModal(modalName, item) {
      if (modalName === 'productModal') {
        this.currentProduct = { imagesUrl: [] };
        this.isNew = true;
        this.productModal.show();
      } else if (modalName === 'editModal') {
        this.currentProduct = { ...item };
        this.isNew = false;
        this.productModal.show();
      } else if (modalName === 'delProductModal') {
        this.currentProduct = item;
        this.delProductModal.show();
      } else if (modalName === 'uploadImgModal') {
        this.uploadImgModal.show();
      }
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
  mounted() {
    this.getAllProduct();
  },
  components: {
    ProductAdminModal,
    ProductDeleteModal,
    Pagination,
    UploadImgModal,
  },
};
</script>

<template>
  <div class="container">
    <div class="text-end mt-4">
      <button
        @click="openModal('uploadImgModal')"
        class="btn btn-primary me-2"
      >
        上傳圖片
      </button>
      <button
        @click="openModal('productModal')"
        class="btn btn-primary"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in products"
          :key="item.id"
        >
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span :class="item.is_enabled ? 'text-success' : 'text-danger'">{{
              item.is_enabled ? '啟用' : '未啟用'
            }}</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                @click="openModal('editModal', item)"
                type="button"
                class="btn btn-outline-primary btn-sm"
              >
                編輯
              </button>
              <button
                @click="openModal('delProductModal', item)"
                type="button"
                class="btn btn-outline-danger btn-sm"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      :pages="pagination"
      @change-page="getAllProduct"
    ></pagination>
  </div>
  <Product-Admin-Modal
    :current-product="currentProduct"
    :is-new="isNew"
    @product-instance="getProductModal"
    @refresh-products="refreshProducts"
  ></Product-Admin-Modal>
  <Product-Delete-Modal
    :current-product="currentProduct"
    @product-delete-instance="getProductDeleteModal"
    @refresh-products="refreshProducts"
  ></Product-Delete-Modal>
  <Upload-Img-Modal @upload-img-instance="getUploadImgModal"></Upload-Img-Modal>
</template>

<style>
img {
  object-fit: contain;
  max-width: 100%;
}

.primary-image {
  height: 300px;
}

.images {
  height: 150px;
}
</style>
