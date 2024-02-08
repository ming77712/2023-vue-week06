<template>
    <h2 class="text-center">你現在在前台頁面</h2>
    <nav class="mb-4">
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/products">產品列表</RouterLink> |
        <RouterLink to="/cart">購物車</RouterLink> |
        <RouterLink to="/login">登入</RouterLink> |
        <RouterLink to="/admin/products">後台管理</RouterLink> |
    </nav>
    <div class="container">
        <RouterView />
    </div>
</template>
