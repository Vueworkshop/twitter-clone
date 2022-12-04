<script setup>
const props = defineProps({
  item: Object,
});

const name = props.item.name;
const path = props.item.path;
const icon = props.item.icon;
</script>

<template>
  <div
    class="flex items-center px-4 py-2 my-2 transition ease-in-out delay-150 rounded-full cursor-pointer  SidebarItem hover:bg-slate-200"
    @click="$router.push(path)"
  >
    <component :is="icon" width="20px" height="20px" class="mr-3" />
    <div class="text-xl font-bold">{{ name }}</div>
  </div>
</template>

<style lang='scss'></style>