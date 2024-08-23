<template>
    <div style="width: 600px; height: 400px; border: 1px solid black;">

        <div style="color: red">this is a color string</div>

        <div>
            <span>this is</span>
            <span style="color: red"> a color</span>
            <span>string</span>      
        </div>




        <div>block 1</div>
        <p>block 2</p>
        <p>block 2</p>
        <p>block 2</p>
        <p>block 2</p>



        <span>non block </span>  <br/>
        <a>a</a><br/>
        <a>a</a> 

        
    <v-text-field v-model="input1"></v-text-field>
     <v-text-field v-model="input2"></v-text-field>

    </div>

     <div style="border: 1px solid red; width: 400px; display: flex; overflow: auto">
        
        <div style="width: 50%">{{input1}}</div>
        <div style="width: 50%">{{ input2 }}</div>
    
    
    </div>


    <div style="border: 1px solid red; display: flex; overflow: hidden">
        
        <div style="flex-basis: 50%; max-width:150px;">{{input1}}</div>
        <div style="flex-basis: 50%">{{ input2 }}</div>
    
    
    </div>


    <div style="border: 1px solid red; display: flex; flex-direction: column; height:200px;">
        
        <div style="flex-basis: 50%;">{{input1}}</div>
        <div style="flex-basis: 50%">{{ input2 }}</div>
    
    
    </div>

   



</template>



<script setup>


const input1 = ref('')
    const input2 = ref('')
</script>


<style>
</style>