<script setup>
import heartFilled from '@/assets/heartFilled.png'
import heartOutline from '@/assets/heartOutline.png'

const props = defineProps({
  carData: {
    type: Object,
    required: true
  },
  favored: {
    type: Boolean
  }
})

const emits = defineEmits(['addToFavorite'])

const handleClick = () => {
    navigateTo(`/car/${props.carData.name}-${props.carData.id}`)
}
</script>

<template>
     <div class="
       relative
       shadow
       border
       w-full
       overflow-hidden
       mb-5 
       cursor-pointer
       h-[200px]
     ">
        <img 
          class="absolute w-7 right-5 top-2 z-20" 
          :src="favored ? heartFilled : heartOutline" 
          alt=""
          @click="emits('addToFavorite', carData.id)"
        >
        <div 
          class="flex h-full" 
          @click="handleClick"
        > 
        <NuxtImg
            :src="carData.url"
            alt="car" class="
        w-[300px] 
        h-full
        object-cover
        " />
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