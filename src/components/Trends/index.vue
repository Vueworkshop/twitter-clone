<script setup>
import { reactive } from "vue";
import TrendsItem from "./Item.vue";

const state = reactive({
  trends: [],
});

const fetchTrends = () => {
  state.trends = [
    {
      topic: "Youtube's tutorial",
      hashtag: "codewithguillaume",
      count: 424432,
    },
    {
      topic: "Technology",
      hashtag: "ElonMuskIsBuyingTwitter",
      count: 13442423233,
    },
    {
      topic: "Astro",
      hashtag: "astroframework",
      count: 4243,
    },
  ];
};

fetchTrends();
</script>

<template>
  <div>
    <div class="Trends">
      <header class="mb-2">
        <h2 class="text-xl font-bold">Trends for you</h2>
      </header>
      <div v-if="!state.trends.length" class="mb-2">
        There are no trends yet.
      </div>
      <div v-else>
        <TrendsItem
          v-for="(item, index) in state.trends"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<style lang='scss'></style>