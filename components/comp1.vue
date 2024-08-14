<template>

    component<br/>
        <v-btn @click="add" text color="primary"  >++</v-btn><br/>

        <comp2></comp2><br/>


</template>

<script setup lang="js">

import comp2 from '~/components/comp2.vue'

const d1 = ref(1)

    const add = function () {
        d1.value++
    }
</script>