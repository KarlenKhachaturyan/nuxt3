<script setup>
const { attributes } = defineProps({
    attributes: {
    type: Array,
    required: true
  },
})

</script>
<template>
    <div class="mr-10 mt-5 border-b pb-5" v-if="attributes">
        <div class="flex text-lg mt-2" v-for="(attr, index) in attributes" :key="index">
            <p class="rounded text-lime-800 mr-3"></p>
            <p>{{ attr }}</p>
        </div>
    </div>
</template>