<template>

    <div style="display: flex; flex-direction: column">
        

        你已登入成功

        {{ authStore.account }} <br/>
        {{ authStore.token }}




        <v-btn @click="logout()">登出</v-btn>
    </div>


</template>

<script setup>


definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'token',
  ],
});


import { useauthStore } from '~/store/auth';
const authStore = useauthStore()

onMounted(() => {

    // const acc = useCookie('account')
    // const tok = useCookie('token')

    // authStore.setlogin_account(acc.value)
    // authStore.setlogin_accessToken(tok.value)



})

const logout = () => {
    authStore.setlogin_account('')
    authStore.setlogin_accessToken('')


    
    useCookie('account').value = null

    let tok = useCookie('token')
    tok.value = null


    let router = useRouter()
    router.push('/auth/login')
}


</script>

