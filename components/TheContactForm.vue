<template>
    <div class="mt-10">
        <div class="flex w-[700px] justify-between">
            <input type="text" name="name" id="name" class="border p-1" placeholder="Name">
            <input type="text" name="surname" id="surname" class="border p-1" placeholder="Surname">
            <input type="email" name="email" id="email" class="border p-1" placeholder="Email">
        </div>
        <div class="mt-4 flex w-[700px]">
            <textarea class="flex border p-1 w-full" placeholder="Your Message"></textarea>
        </div>
        <button class="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Submit
        </button>
    </div>
</template>