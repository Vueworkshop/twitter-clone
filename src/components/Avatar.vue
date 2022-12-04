<script setup>
const props = defineProps({
  user: Object,
});
</script>

<template>
  <div class="Avatar">
    <div v-if="props.user?.image">{{ props.user.image }}</div>
    <div
      v-else
      class="flex items-center justify-center w-12 h-12 bg-primary rounded-full"
    >
      <span class="capitalize text-white font-bold text-xl">{{
        props.user?.email ? props.user?.email[0] : "T"
      }}</span>
    </div>
  </div>
</template>

<style lang='scss'></style>