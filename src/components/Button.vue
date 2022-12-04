<script setup>
const props = defineProps({
  text: String,
  disabled: Boolean,
});
</script>

<template>
  <button
    :class="`Button
      ${props.disabled ? 'bg-slate-300' : 'bg-primary hover:bg-blue-300'}
      transition
      delay-100
      text-white
      py-2
      px-3
      rounded-full
      text-center
      cursor-pointer`"
    :disabled="disabled"
  >
    {{ props.text || "Tweet" }}
  </button>
</template>

<style lang='scss'></style>