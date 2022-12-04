import { useMainStore } from '@/stores/main.js';

export default function useMain() {
  const store = useMainStore();

  return {
    ...store
  }
}