<script setup>
import numeral from "numeral";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  item: Object,
});

const topic = props.item.topic;
const hashtag = props.item.hashtag;
const count = props.item.count;

const goToTrendsPage = () => {
  router.push(`/trends/${hashtag}`);
};
</script>

<template>
  <div
    class="px-4 py-2 my-2 transition ease-in-out delay-150 rounded-sm cursor-pointer  TrendsItem hover:bg-slate-100"
    @click="goToTrendsPage"
  >
    <p class="text-slate-500">{{ topic }}</p>
    <p class="text-base text-black">#{{ hashtag }}</p>
    <p class="text-sm text-slate-500">
      {{ numeral(count).format("0.0a") }} tweets
    </p>
  </div>
</template>

<style lang='scss'></style>