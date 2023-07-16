<script setup>
const props = defineProps({
  carData: {
    type: Object,
    required: true
  }
})
const handleClick = () => {
    navigateTo(`/car/${props.carData.name}-${props.carData.id}`)
}
</script>

<template>
     <div class="
       shadow
       border
       w-full
       overflow-hidden
       mb-5 
       cursor-pointer
       h-[200px]
     "
     @click="handleClick"
     >
        <div class="flex h-full">
        <img
            :src="carData.url"
            alt="car" class="
        w-[300px] 
        h-full
        object-cover
        ">
        <div class="
            p-4
            flex
            flex-col
        ">
            <div>
            <h2 class="text-2xl text-blue-400"> {{ carData.name }}</h2>
            <p class="text-gray-700">{{ carData.description }} </p>
            </div>
            <h4 class="mt-auto text-blue-700">Price: ${{ carData.price }}</h4>
        </div>
        </div>

    </div>
</template>