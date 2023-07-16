<script setup>
const route = useRoute()
const { setHeadTitle } = useUtilities()
useHead({
    title: `${ setHeadTitle(route.params.make, "Cars")} in ${ setHeadTitle(route.params.city, '')}`
})
definePageMeta({
  layout: 'custom'
})
</script>

<template>
    <div class="
      mt-32
      flex"
    >
      <car-side-bar />
      <!-- to show the nested routes inside the directory -->
      <!-- the direcory has to have the same name !!!!! -->
      <NuxtPage />
    </div>
  </template>