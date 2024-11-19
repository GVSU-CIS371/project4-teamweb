<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="white--text">My Online Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.text"
        :to="link.to"
        text
        router
        class="white--text"
      >
        <v-icon left>{{ link.icon }}</v-icon>
        {{ link.text }}
      </v-btn>
    </v-app-bar>

    <v-main class="bg-grey-lighten-5">
      <router-view />
    </v-main>

    <v-footer color="primary" dark app>
      <v-col class="text-center white--text">
        © 2023 My Online Store. All rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const links = ref([
  { text: "Home", to: "/", icon: "mdi-home" },
  { text: "Electronics", to: "/electronics", icon: "mdi-laptop" },
  { text: "Clothing", to: "/clothing", icon: "mdi-tshirt-crew" },
  { text: "Groceries", to: "/groceries", icon: "mdi-food-apple" },
  { text: "Best Seller", to: "/bestseller", icon: "mdi-star" },
]);
</script>
