<template>
  <v-container>
    <h1 class="text-h3 mb-4">All Products</h1>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <StoreItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import StoreItem from './StoreItem.vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.init();
});

const products = productStore.products;
</script>