<template>

</template>

<script setup>


onMounted(async () => {

    let router = useRoute()

    let code = router.query.code



    let url = `https://api-global.preprod.decathlon.net/connect/oauth/token`
    let res = await $fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            client_id: '4e7311c5-3d8e-433a-8214-b8b12af1a427',
            client_secret: 'FiWKntOwmFW9AbhBhN9mVMhGRMfUwVecox3e782zl7ipVqGunqEya9zuUBjP3EW40AvR03hOGKai4t8dXN1E354H6PgGPRDdDduZHmZwtD6VGir4rVqYACAKApMAGYD8',
            code: code,
            redirect_uri: 'http://localhost/auth/callback/dkt',
            grant_type: 'authorization_code'
        }
    }).then(result => {
        console.log('result: ', result);
        return result
    }).catch(error => {
        console.log('11111error: ', error);
    })

})

</script>