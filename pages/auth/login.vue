<template>

    <div style="display: flex; flex-direction: column">
        

        帳號1
        <v-text-field v-model="account" ></v-text-field>

        
        密碼1
        <v-text-field v-model="password" ></v-text-field>



        <v-btn @click="submitLogin()">登入</v-btn>


    </div>


</template>

<script setup>


const { login } = useAuth()

const account = ref('eztest')
const password = ref('2fd709d468934a96ad9a7e84d4f1ece2')

import { useauthStore } from '~/store/auth';

    const authStore = useauthStore()

const submitLogin = async () => {


    let res = await login(account.value, password.value).then(result => {
        console.log('result: ', result);
        return result
    }).catch(error => {
        console.log('11111error: ', error);
        
    })

    if (res?.account && res?.accessToken) {
        alert('你登入成功')
    } else {
        return alert('登入失敗')
    }

    let token = res.accessToken

    
    authStore.setlogin_account(account.value)
    authStore.setlogin_accessToken(token)


    const acc = useCookie('account')
    const tok = useCookie('token')

    acc.value = account.value
    tok.value = token


    let router = useRouter()

    router.push({ path: '/auth' })
}

</script>

