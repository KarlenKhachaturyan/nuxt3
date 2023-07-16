<script setup>
const modal = ref({
  location: false,
  make: false,
  year: false
})

const city = ref('')
const make = ref('')
const year = ref('')

const route = useRoute()
const changeCity = () => {
  if(!city.value) return
  if(!isNaN(parseInt(city.value))){
    throw createError({
      statusCode: 400,
      message: "Invalid City"
    })
  }
  showModal('location')
  navigateTo(`/city/${city.value}/car/${route.params.make}`)
}
const showModal = (key) => {
  modal.value[key] = !modal.value[key]
}

</script>
<template>
    <div class="
     shadow
     border
     w-64
     mr-10
     z-30
     h-[190px]
   ">
        <div class="
       p-5
       flex
       justify-between
       relative
       cursor-pointer
       border-b
     ">
        <h3>Location</h3>
        <h3 @click="showModal('location')" class="text-blue-400 capitalize">{{route.params.city}}</h3>
        <div 
          v-if="modal.location"
        class="
            absolute 
            border 
            shadow 
            left-56 
            p-5 
            top-1 
            -m-1 
            bg-white
          ">
          <input class="border p-1 rounded" type="text" v-model="city">
          <button @click="changeCity" class="bg-blue-400 w-full mt-2 rounded text-white p-1"> Apply</button>
        </div>
      </div>
      <div class="
       p-5
       flex
       justify-between
       relative
       cursor-pointer
       border-b
     ">
        <h3>Make</h3>
        <h3 @click="showModal('make')" class="text-blue-400 capitalize">BMW</h3>
        <div 
        v-if="modal.make"
        class="
            absolute 
            border 
            shadow 
            left-56 
            p-5 
            top-1 
            -m-1 
            bg-white
        ">
            <input class="border p-1 rounded" type="text">
            <button class="bg-blue-400 w-full mt-2 rounded text-white p-1"> Apply</button>
        </div>
      </div>
    <div class="
       p-5
       flex
       justify-between
       relative
       cursor-pointer
       border-b
     ">
        <h3>Price</h3>
        <h3 @click="showModal('year')" class="text-blue-400 capitalize">$</h3>
        <div 
          v-if="modal.year"
          class="
                absolute 
                border 
                shadow 
                left-56 
                p-5 
                top-1 
                -m-1 
                bg-white
              ">
              <input class="border p-1 rounded" type="text">
              <button class="bg-blue-400 w-full mt-2 rounded text-white p-1"> Apply</button>
          </div>
        </div>
    </div>
</template>