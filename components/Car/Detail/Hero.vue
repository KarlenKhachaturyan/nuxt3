<script setup>
const {image, name,
price,
seats,
miles} = defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  seats: {
    type: String,
    required: true
  },
  miles: {
    type: String,
    required: true
  }
})

</script>

<template>
     <div class="mt-10">
        <img 
            :src="image" 
            alt=""
            class="w-full"
        >
        <h3 class="text-4xl mt-10">{{ name }}</h3>

        <div class="flex justify-between items-center mt-10 border-b pb-5">
            <div>
            <p class="text-gray">{{ seats }} seats | {{ miles }} miles</p>
            </div>
            <div>
            <p class="text-blue-700">${{ price }}</p>
            </div>
        </div>
    </div>
</template>