<script setup>
const error = useError()

const handleClick = ()=> {
    clearError({
        redirect: '/'
    })
}

</script>


<template>
<div
  class="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  "
>
  <div class="px-40 py-20 bg-white rounded-md shadow-xl">
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-blue-600 text-9xl">{{ error.statusCode }}</h1>

      <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
        <span class="text-red-500">Oops!</span> <br>{{ error.message }}
      </h6>

      <button
        @click=handleClick
        class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
        >
        Go home
    </button>
    </div>
  </div>
</div>
</template>