<template>
  <div>

index page
  </div>
</template>

<script setup>
import { useCounterStore } from "~/store/counter";
const counterStore = useCounterStore();







const go = function () {
    let router = useRouter();
    console.log('router: ', router);

    // router.push({ path: '/store/store2z' })
    // router.push('/store/store2')
    router.push({ name: 'store-store2' })

    // window.open('/store/store2', '_blank')
    // window.open('/store/store2', '_self')
}


onMounted(() => {
  let route = useRoute()
  console.log('route: ', route);
  console.log('mounted page id', route.params.id)

   let router = useRouter();
    console.log('router: ', router);
    
})
</script>

<style></style>
