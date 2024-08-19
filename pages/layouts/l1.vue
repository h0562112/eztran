
<template>
    <div>
    
    ======

        <comp1 :p1="p_var" :p2="30" ref="comp111"  @adddd="p_var++"  ></comp1>
        
    ======
    <br/>
    p_var {{ p_var }} <br/>
    c_var {{ comp111 }}


    <v-btn @click="check()">check</v-btn>"


    <v-btn @click="print_var()">print_var</v-btn>"
    
    </div>
</template>







<script setup lang="js">
    //page
    definePageMeta({
        layout: 'empty'
    })

const p_var = ref(100)
const comp111 = ref(222)
import comp1 from '~/components/comp1.vue'



const {  print_var } = useGame()


const check = function () {
    console.log(comp111.value)
    console.log(comp111.value.c_var)
    console.log(comp111.value.add)
    comp111.value.add()
}
</script>
<style lang="scss"></style>