<script setup>
import { ref, reactive } from "vue";
import Timeline from "@/components/Timeline/index.vue";
import { supabase } from "@/supabase";

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
});

let tweets = ref([]);

const fetchTweets = async () => {
  try {
    state.loading = true;

    let { data, error } = await supabase.from("tweets").select("*, user_id(*)");

    console.log(data);

    tweets.value.push(...data);
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
};

fetchTweets();
</script>

<template>
  <div class="Home">
    <Timeline :tweets="tweets" />
  </div>
</template>

<style lang='scss'></style>