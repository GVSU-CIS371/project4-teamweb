<template>
  <v-container>
    <h1 class="text-h3 mb-4">Best Sellers</h1>
    <v-row>
      <v-col v-for="product in bestSellerProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <StoreItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import StoreItem from './StoreItem.vue';

const productStore = useProductStore();
const bestSellerProducts = computed(() => productStore.filterByRating(4.5));
</script>