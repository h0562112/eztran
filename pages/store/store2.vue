<template>
  <div>


    page2 <br>

    <div>count: {{ counterStore.count }}</div>
    <div>count2: {{ counterStore.count2 }}</div>

    <div>
      <v-btn type="button" @click="counterStore.increment(3)">+</v-btn>
    </div>

    <div>
      <v-btn type="button" @click="counterStore.decrement(1)">-</v-btn>
    </div>

    <div>
      <v-btn type="button" @click="go()">+</v-btn>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "~/store/counter";
const counterStore = useCounterStore();


const go = function () {
    let route = useRoute()
    let router = useRouter();

    // router.push({ path: '/store/store1' })

    // window.open('/store/store1', '_blank')
    window.open('/store/store1', '_self')
}
</script>

<style></style>
