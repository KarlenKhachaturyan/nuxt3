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
      <NuxtErrorBoundary >
        <car-side-bar />
        <!-- to show the nested routes inside the directory -->
        <!-- the direcory has to have the same name !!!!! -->
        <NuxtPage />
        <template #error="{error}">
          <div class="text-center mx-auto flex flex-col">
            <h3>Sorry, something went wrong</h3>
            <code>{{ error }}</code>
            <button
              @click="error.value = null"
              class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
            >
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </template>