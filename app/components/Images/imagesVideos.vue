<template>
  <!-- Gallery Grid -->
  <div class="flex justify-center pt-10">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full justify-items-center"
    >
      <div
        class="group relative overflow-hidden rounded-2xl shadow-lg"
      >
        <!-- Image -->
        <NuxtImg
          data-aos="fade-up"
          class="w-80 h-64 object-cover transform group-hover:scale-110 transition duration-500 rounded-2xl"
          alt="Gallery Image"
        />

        <!-- Overlay on hover -->
        <div
          class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
        >
          <p class="text-white font-semibold">Check This out</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const gallery = [];
</script>
