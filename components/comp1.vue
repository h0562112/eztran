<template>

    <div style="background-color: grey">
   c_var {{ c_var }} <br>

   p_var {{ props.p1 }} <br>
  p_var2  {{ props.p2}} <br>

  <v-btn @click="add">add</v-btn>"


    </div>


</template>

<script setup lang="js">

import comp2 from '~/components/comp2.vue'

// :
const props = defineProps({
    p1: {},
    p2: {}
})







const c_var = ref(1)

    const add = function () {
        emit('adddd')
    }

    
// @
const emit = defineEmits(["adddd"])






defineExpose({
    c_var,
    add
})


</script>