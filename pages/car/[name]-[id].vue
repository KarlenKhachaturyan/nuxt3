<script setup>
const route = useRoute();
const { setHeadTitle } = useUtilities()
useHead({
    title: setHeadTitle(route.params.name, '')
})
definePageMeta({
    layout: 'custom'
})
</script>

<template>
    <car-detail-hero />
    <car-detail-attributes />
    <car-detail-description />
    <the-contact-form/>
</template>