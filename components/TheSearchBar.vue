<script setup>
const city = ref('')
const searchError = ref(false)
const handleClick = () => {
    if(!city.value) {
        return searchError.value = true
    }
    navigateTo(`/city/${city.value}/car`)
}
</script>

<template>
    <div class="
        font-serif
        w-[1000px]
        text-2xl
        rounded-full
        bg-white
        flex
        justify-between
        overflow-hidden
        drop-shadow-2xl
        mx-auto
        my-5
    ">
    <input 
        class=" py-3 px-5 w-full text-2xl rounded-full focus:outline-none" 
        :class="searchError ? 'border-rose-500 border' : ''"
        type="text"
        placeholder="Type Here"
        v-model="city"
    >
    <button 
        class="bg-sky-500 px-10 text-white"
        @click="handleClick"
    >
        Search
    </button>
    </div>
</template>