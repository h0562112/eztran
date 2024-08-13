<template>
  <div>


    page1 <br>

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
    let router = useRouter();

    // router.push({ path: '/store/store2z' })
    // router.push('/store/store2')
    router.push({ name: 'store-store2' })

    // window.open('/store/store2', '_blank')
    // window.open('/store/store2', '_self')
}


onMounted(() => {

  let route = useRoute()

  

  console.log('mounted page id', route.params.id)
    
})
</script>

<style></style>
