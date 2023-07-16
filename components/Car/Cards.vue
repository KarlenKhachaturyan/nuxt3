<script setup>
const  { cars } = useCars()
</script>

<template>
    <div class="w-full">
        <CarMinify v-for="car in cars" :key="car.id" :car-data="car" />
    </div>
</template>