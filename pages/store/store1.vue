<template>
  <div style="border: 3px solid black;">
   

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

  definePageMeta({
    layout: 'backadmin'
  })


    let route = useRoute()
    let router = useRouter();

    // router.push({ path: '/store/21312312/store2' })
    // router.push('/store/store2')
    router.push({ name: 'store-id-id2', params: { id: '33333',id2:'123445' }, query: { a: '1', b: '2'}  })

    // window.open('/store/store2', '_blank')
    // window.open('/store/store2', '_self')
}
</script>

<style></style>
