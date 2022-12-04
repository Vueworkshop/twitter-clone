<script setup>
import { reactive } from "@vue/reactivity";
import { supabase } from "@/supabase.js";

const state = reactive({
  email: undefined,
  success: false,
  loading: false,
  error: undefined,
});

const handleLogin = async () => {
  try {
    state.loading = true;
    let { user, error } = await supabase.auth.signInWithOtp({
      email: state.email,
    });
    state.success = true;
  } catch (error) {
    console.log(error);
  } finally {
    state.email = undefined;
    state.loading = false;
  }
};
</script>

<template>
  <div class="container mx-auto Auth">
    <div class="px-4 py-5 mx-auto bg-white rounded-xl w-96">
      <div class="flex flex-col">
        <input
          class="px-3 py-2 mb-4 border rounded-lg outline-none border-slate-500"
          placeholder="me@mail.com"
          v-model="state.email"
        />
        <div
          class="relative px-3 py-2 mb-4 text-sm text-green-700 bg-green-100 border border-green-400 rounded "
          role="alert"
          v-if="state.success"
        >
          Check your email to confirm your address.
        </div>
        <div
          class="relative px-3 py-2 mb-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded "
          role="alert"
          v-if="state.error"
        >
          {{ state.error }}
        </div>
        <button
          @click="handleLogin"
          :disabled="state.loading"
          class="px-2 py-1 text-white rounded-lg"
          :class="`${state.loading ? 'bg-slate-300' : 'bg-primary'}`"
        >
          {{ state.loading ? "Loading..." : "Signup" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang='scss'></style>