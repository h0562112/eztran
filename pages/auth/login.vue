<template>
<!-- 
    <div style="display: flex; flex-direction: column">
        

        


    </div> -->

    <div class="d-flex" style="width: 100vw; height: 100vh;">
        <v-card style="width: 400px;  margin: auto">
            <v-card-title style="background-color: #da763d; color: white">後台管理</v-card-title>

            <!-- <v-card-subtitle class="mt-2">登入</v-card-subtitle> -->
            
            <v-card-text class="pt-5">


                <v-text-field variant="outlined" v-model="account" :clearable="true" label="帳號"></v-text-field>

                <v-text-field variant="outlined" v-model="password" clearable clear-icon="$plus" type="password" label="密碼"></v-text-field>

            </v-card-text>

            <v-divider class="pb-5"></v-divider>


            <v-card-actions>

                    <!-- <div style="flex-grow: 1;"></div> -->
                    <v-spacer></v-spacer>

                    <v-btn variant="tonal" @click="submitLogin" position="right" class="mr-4" color="grey">取消</v-btn>
                    <v-btn variant="tonal" @click="submitLogin" position="right" color="primary">登入</v-btn>
            </v-card-actions>
        </v-card>

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

