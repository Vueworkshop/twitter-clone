<script setup>
import Auth from "@/components/Auth.vue";
</script>

<template>
  <main class="container mx-auto">
    <img src="@/assets/twitter.png" class="w-32 mx-auto my-8" />
    <h1 class="mb-3 text-2xl font-bold text-center">
      Welcome to Twitter clone with Supabase.
    </h1>
    <p class="text-center text-slate-500">
      Enter your e-mail to login or to create an account.
    </p>
    <Auth />
  </main>
</template>
