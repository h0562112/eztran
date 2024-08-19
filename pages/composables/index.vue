<template>
    <div>composables pages</div>

    <v-btn @click="getTestBtn">getTest</v-btn>
    <v-btn @click="add_var">add</v-btn>
    <v-btn @click="print_var">print</v-btn>


    <v-btn @click="pushPage">pushPage</v-btn>


    reqResponse {{ reqResponse }}

</template>

<script setup>

    const { getTest, add_var, print_var } = useGame()




    const getTestBtn = async function () {

        getTest()
            

}

    const pushPage = function () {
        console.log('pushPage');
        let router = useRouter()
        router.push('/layouts/l1')
}

const reqResponse = ref(null)

    onMounted(async () => {
        reqResponse.value = await getTest()

    })


    const { } = await useAsyncData(() => {
        console.log('asyncData');
        return {}
    })


    


</script>