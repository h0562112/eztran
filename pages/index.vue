<template></template>
<script setup lang="js">
onBeforeMount(() => {
    const router = useRouter();
    router.push('/trainingprogram');
})
//page
definePageMeta({
    layout: 'empty'
})
</script>
<style lang="scss"></style>