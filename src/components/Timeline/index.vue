<script setup>
import { ref, computed } from "vue";
import Tweet from "@/components/Tweet/index.vue";
import Edit from "@/components/Tweet/Edit.vue";
import useMain from "@/composables/useMainStore.js";

const { user } = useMain();

// const props = defineProps({
//   tweets: [],
// });

// let tweets = props.tweets;
let tweets = ref([]);

const addTweet = (newTweet) => {
  // remove date here, just for example
  tweets.value.push({ ...newTweet, created_at: new Date() });
};

const orderedTweets = computed(() => {
  return tweets.value.sort((a, b) => b.created_at - a.created_at);
});
</script>

<template>
  <div class="Timeline">
    <Edit v-if="user" @newTweet="addTweet" />
    <div v-if="!tweets.length" class="relative p-6 mb-4 text-black rounded">
      There are no tweets yet.
    </div>
    <div v-else>
      <Tweet
        v-for="(tweet, index) in orderedTweets"
        :key="index"
        :tweet="tweet"
      />
    </div>
  </div>
</template>

<style lang='scss'></style>