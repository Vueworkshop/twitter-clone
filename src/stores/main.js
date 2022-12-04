import { ref, computed, toRefs } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const user = ref(undefined)
  const getCurrentUser = computed(() => (user.value))
  function addUser(_user) {
    user.value = _user
  }

  return { addUser, getCurrentUser, user }
})
