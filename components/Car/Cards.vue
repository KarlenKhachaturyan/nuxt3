<script setup>
const  { cars } = useCars()

const favorite = useLocalStorage('favorite', {})

const handleFavorite = (id) => {
    if(id in favorite.value) {
        delete favorite.value[id] 
    }else {
        favorite.value = {
            ...favorite.value,
            [id] : true
        }
    }
}
</script>

<template>
    <div class="w-full">
        <CarMinify 
            v-for="car in cars" 
            :key="car.id" 
            :car-data="car"
            @addToFavorite="handleFavorite"
            :favored="car.id in favorite"
        />
    </div>
</template>