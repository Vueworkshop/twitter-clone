<script setup>
// import { onMounted } from "vue";
// import { supabase } from "@/supabase.js";
import { RouterView } from "vue-router";
import { useMainStore } from "@/stores/main.js";

const store = useMainStore();

// onMounted(() => {
//   supabase.auth.getSession().then(({ data }) => {
//     if (store && data) {
//       const { session } = data;
//       store.addUser(session.user);
//     }
//     // session.value = data.session;
//   });

//   supabase.auth.onAuthStateChange((_, _session) => {
//     // session.value = _session;
//   });
// });
</script>

<template>
  <RouterView />
</template>