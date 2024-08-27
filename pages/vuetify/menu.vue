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
        class=" qColor"
        style="
          
          flex-basis: 0.1;
          min-width: 200px;
          max-width: 300px;
        ">


        <v-list lines="two" >
            <v-list-item

                
                v-ripple
                class="cursor-pointer my-2 "
                style="background-color: #dddddd"
                v-for="menu in menus"
                :key="menu"
                :title="menu.label"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"

                :href="menu.link"
                target="_blank"

            ></v-list-item>
        </v-list>


      </div>
      <div class="border-double rounded-lg cursor-pointer" style="flex-grow: 1">content</div>
    </div>
  </div>
</template>



<script setup>

const menus = ref([
    { label: 'menu1', link: 'https://google.com?a=1'},
    { label: 'menu2', link: 'https://google.com?a=2'},
    { label: 'menu3', link: 'https://google.com?a=3'},
    { label: 'menu4', link: 'https://google.com?a=4'},
    { label: 'menu5', link: 'https://google.com?a=5'},
    { label: 'menu6', link: 'https://google.com?a=6'}
])


</script>

<style>

.redColor {
    background-color: red;

}



</style>