<script setup>
const route = useRoute();
const { setHeadTitle } = useUtilities()
const { cars } = useCars()
const selectedCar = computed(() => {
    return cars.find(car => car.id === +route.params.id)
}) 

if(!selectedCar.value){
    throw createError({
        statusCode: 404,
        message: 'The car is not found'
    })
}

useHead({
    title: setHeadTitle(route.params.name, '')
})
definePageMeta({
    layout: 'custom'
})
</script>

<template>
    <div v-if="selectedCar">
        <car-detail-hero 
            :image="selectedCar.url"
            :name="selectedCar.name" 
            :price="selectedCar.price"
            :seats="selectedCar.seats"
            :miles="selectedCar.miles"
        />
        <car-detail-attributes :attributes="selectedCar.features" />
        <car-detail-description :description="selectedCar.description" />
        <the-contact-form/>
    </div>
</template>