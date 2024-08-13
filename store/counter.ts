import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    count2: 2,
  }),
  actions: {
    increment(number: number) {
      this.count += number;
    },
    decrement(number: number = 1) {
      if (this.count - number >= 0) {
        this.count -= number;
      }
    },
  },
  getters: {
    getCounter: (state) => state.count,
    doubleCount: (state) => state.count * 2,
  },
});
