import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const user = ref({
    email: "codewithguillaume@gmail.com",
    username: "codewithguillaume"
  })
  const getCurrentUser = computed(() => (user.value))
  function addUser(user) {
    user.value = user
    console.log(user)
  }

  return { addUser, getCurrentUser, user }
})
