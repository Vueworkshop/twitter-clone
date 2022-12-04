<script setup>
import { reactive, ref, toRaw } from "vue";
import Avatar from "@/components/Avatar.vue";
import Button from "@/components/Button.vue";
import { useMainStore } from "@/stores/main.js";

const store = useMainStore();

const emit = defineEmits(["newTweet"]);

let hashtags = ref([]);

let state = reactive({
  loading: false,
});

let hashtagModel = {
  hashtag: undefined,
  user_id: store.user.id,
  tweet_id: undefined,
};

let newTweet = reactive({
  content: undefined,
  user: store.user,
});

const checkHashtags = () => {
  const found = [];
  if (newTweet.content.length) {
    let preHashtags = text.split("#");
    let i = 0;
    if (text[0] !== "#") i++;

    for (null; i < preHashtags.length; i++) {
      let item = preHashtags[i];
      found.push(item.split(" ")[0]);
    }
    hashtags.value = found;
  }
};

const sendNewHashtags = () => {
  if (hashtags.value.length > 0) {
    hashtags.value.forEach((text, i) => {
      if (text.length > 0) {
        console.log({
          ...hashtagModel,
          hashtag: text,
        });
      }
    });
  }
};

const sendNewTweet = async () => {
  if (!newTweet.content) {
    return;
  }
  try {
    state.loading = true;

    emit("newTweet", toRaw(newTweet));

    newTweet.content = undefined;
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
};
</script>

<template>
  <div
    class="p-4 border-b NewTweet"
    id="newTweet"
    @keypress.enter="sendNewTweet"
  >
    <div class="grid grid-cols-12">
      <Avatar :user="store.getCurrentUser" class="col-span-1" />
      <div class="col-span-11 pl-4">
        <input
          type="text"
          v-model="newTweet.content"
          class="w-full p-3 mb-4 border rounded-lg outline-none"
        />
        <div class="w-32">
          <Button :disabled="loading" text="Tweet" @click="sendNewTweet" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss'></style>