<template>
  <div
    style="
      width: 100vw;
      height: 100vh;
      background-color: grey;
      display: flex;
      flex-direction: column;
    "
  >
    <div style="background-color: blue; height: 50px"></div>

    <div class="d-flex flex-row" style="background-color: white; flex-grow: 1;">
      <div
        class="redColor qColor"
        style="
          
          flex-basis: 0.1;
          min-width: 200px;
          max-width: 300px;
        ">

        <div class="pa-5"><v-btn class="elevation-5">1</v-btn></div>
        <div class="ma-5"><v-btn>1</v-btn></div>
        <div class="pt-3"><v-btn>1</v-btn></div>
        <div class="mb-2"><v-btn>1</v-btn></div>
        <div class="pl-5"><v-btn>1</v-btn></div>
        <div class="mr-8"><v-btn>1</v-btn></div>
        <div class="px-5"><v-btn>1</v-btn></div>
        <div class="my-4"><v-btn>1</v-btn></div>
      

      </div>
      <div class="border-double rounded-lg cursor-pointer" style="flex-grow: 1">content</div>
    </div>
  </div>
</template>



<style>

.redColor {
    background-color: red;

}



</style>