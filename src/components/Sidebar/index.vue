<script setup>
import { reactive } from "@vue/reactivity";
import SidebarItem from "./Item.vue";
import Home from "@/components/Icons/Home.vue";
import Hashtag from "@/components/Icons/Hashtag.vue";

const state = reactive({
  menu: [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Explore",
      path: "/",
      icon: Hashtag,
    },
  ],
});
</script>

<template>
  <div class="Sidebar">
    <SidebarItem
      v-for="(item, index) in state.menu"
      :key="index"
      :item="item"
    />
  </div>
</template>

<style lang='scss'></style>