<script setup>
const modal = ref({
  location: false,
  make: false,
  year: false
})

const { makes } = useCars()
const route = useRoute()
const router = useRouter()

const city = ref('')
const priceRange = ref({
  min: '',
  max: ''
})
const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice
  const maxPrice = route.query.maxPrice

  return !minPrice && !maxPrice 
                  ? 'Any' 
                  : !minPrice && maxPrice
                  ? `< $${maxPrice}`
                  : minPrice && !maxPrice
                  ? `$${minPrice} > `
                  : minPrice && maxPrice 
                  ? `$${minPrice}-$${maxPrice}` : ''
})


const changeCity = () => {
  if(!city.value) return
  if(!isNaN(parseInt(city.value))){
    throw createError({
      statusCode: 400,
      message: "Invalid City"
    })
  }
  updateModal('location')
  navigateTo(`/city/${city.value}/car/${route.params.make}`)
}
const changeMake = (make) => {
    updateModal('make')
    navigateTo(`/city/${route.params.city}/car/${make}`)
}
const changeRange = () => {
  if(priceRange.value.min && pricaRange.value.max){
    if(priceRange.value.min > priceRange.value.max) return
  }

  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max
    }
  })
}
const updateModal = (key) => {
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
    <!-- location -->
      <div class="
       p-5
       flex
       justify-between
       relative
       cursor-pointer
       border-b
     ">
        <h3>Location</h3>
        <h3 @click="updateModal('location')" class="text-blue-400 capitalize">{{route.params.city}}</h3>
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
    <!-- make -->
      <div class="
       p-5
       flex
       justify-between
       relative
       cursor-pointer
       border-b
     ">
        <h3>Make</h3>
        <h3 
          @click="updateModal('make')" 
          class="text-blue-400 capitalize"
        >
          {{ route.params.make || 'Any'  }}
        </h3>
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
            flex
            flex-wrap
            justify-between
            w-[600px]
        ">
            <h5 
              v-for="make in makes" 
              :key="make" 
              class="
                w-1/3
                hover:border-2
                m-3
              "
              @click="changeMake(make)"
            >
              {{ make }}
            </h5>
        </div>
      </div>
    <!-- price -->
      <div class="
        p-5
        flex
        justify-between
        relative
        cursor-pointer
        border-b
      ">
          <h3>Price</h3>
          <h3
            @click="updateModal('year')" 
            class="text-blue-400 capitalize"
          >
            {{priceRangeText}}
          </h3>
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
                <input class="border p-1 rounded mb-3" type="number" v-model="priceRange.min" placeholder="Min" min="0">
                <input class="border p-1 rounded mb-3" type="number" v-model="priceRange.max" placeholder="Max" min='0' max="100000000000">
                <button @click="changeRange" class="bg-blue-400 w-full mt-2 rounded text-white p-1"> Apply</button>
            </div>
          </div>
      </div>
</template>