<script setup>
import { reactive } from "vue";
import dayjs from "dayjs";
import Avatar from "@/components/Avatar.vue";
import Comment from "@/components/Icons/Comment.vue";
import Retweet from "@/components/Icons/Retweet.vue";
import Like from "@/components/Icons/Like.vue";
import Share from "@/components/Icons/Share.vue";
import Arrow from "@/components/Icons/Arrow.vue";
import useMain from "@/composables/useMainStore.js";

const { user: currentUser } = useMain();

const getStringSplitted = (str, max = 16) => {
  if (str && str.length > max) {
    return str.substring(0, max) + "...";
  }
  return str;
};

const state = reactive({
  size: 20,
});

const props = defineProps({
  tweet: Object,
});

const tweet = props.tweet;
const user = props.tweet?.user_id;
</script>

<template>
  <div class="p-4 border-b Tweet">
    <div class="flex mb-2">
      <Arrow v-if="tweet.answer_to" class="my-1 mr-2 text-3xl text-slate-400" />
      <div class="grid grid-cols-12">
        <div class="col-span-1">
          <Avatar v-if="user" :user="user" />
        </div>
        <div class="col-span-11 pl-4">
          <header>
            <span v-if="user" class="mr-1 font-bold truncate">{{
              getStringSplitted(user.username || user.email, 16)
            }}</span>
            <span v-if="user" class="mr-1 text-sm text-slate-500"
              >@{{ user.username || user.email.split("@")[0] }}</span
            ><span class="mr-1 text-xs text-slate-500"
              >· {{ dayjs(created_at).format("M/DD/YYYY hh:mm") }}</span
            >
          </header>
          <p class="mb-3">{{ props.tweet.content }}</p>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-4 place-content-evenly"
      :class="`${
        currentUser ? 'text-slate-500 cursor-pointer' : 'text-slate-300'
      }`"
    >
      <Comment
        class="mx-auto hover:text-primary"
        :width="state.size"
        :height="state.size"
      />
      <Retweet
        class="mx-auto hover:text-primary"
        :width="state.size"
        :height="state.size"
      />
      <Like
        class="mx-auto hover:text-primary"
        :width="state.size"
        :height="state.size"
      />
      <!-- <Share
        class="mx-auto hover:text-primary"
        :width="state.size"
        :height="state.size"
      /> -->
    </div>
  </div>
</template>

<style lang='scss'></style>