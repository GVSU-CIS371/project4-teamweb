<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="product.data.image" height="200px"></v-img>
    <v-card-title>{{ product.data.name }}</v-card-title>
    <v-card-subtitle>
      {{ product.data.category }} | Rating: {{ product.data.rating }}
    </v-card-subtitle>
    <v-card-text>
      <div>{{ product.data.description }}</div>
      <div class="mt-2 text-h6 font-weight-bold">
        ${{ product.data.price.toFixed(2) }}
      </div>
      <div>Stock: {{ product.data.stock }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" variant="outlined">Add to Cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ProductDoc } from '../types/product';

defineProps<{
  product: ProductDoc;
}>();
</script>