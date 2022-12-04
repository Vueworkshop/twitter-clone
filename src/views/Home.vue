<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar/index.vue";
import Timeline from "@/components/Timeline/index.vue";
import Trends from "@/components/Trends/index.vue";
</script>

<template>
  <main class="flex flex-col text-base">
    <Header class="sticky top-0 z-30 bg-white" />
    <div class="container grid h-screen grid-cols-8 gap-4 mx-auto">
      <Sidebar class="h-screen col-span-2 overflow-none" />
      <RouterView class="col-span-4 border-l border-r" />
      <Trends class="sticky col-span-2 my-4" />
    </div>
  </main>
</template>
