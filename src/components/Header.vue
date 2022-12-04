<script setup>
import Avatar from "@/components/Avatar.vue";
import { useMainStore } from "@/stores/main.js";

const store = useMainStore();
</script>

<template>
  <div class="px-4 py-3 border-b Header">
    <div class="container grid items-center grid-cols-2 mx-auto">
      <img
        src="@/assets/twitter.png"
        class="w-8 cursor-pointer"
        @click="$router.push('/')"
      />
      <div class="flex items-end cursor-pointer UserMenu justify-self-end">
        <div v-if="store.getCurrentUser">
          <Avatar :user="store.getCurrentUser" />
        </div>
        <button
          v-else
          class="px-2 py-1 text-sm border  border-primary text-primary rounded-xl"
          @click="$router.push('/login')"
        >
          Signup
        </button>
      </div>
    </div>
  </div>
</template>

<style lang='scss'></style>