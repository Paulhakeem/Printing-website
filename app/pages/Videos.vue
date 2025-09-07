<!-- File: pages/gallery.vue -->
<template>
 <main>
   <div class="relative min-h-screen w-full overflow-hidden">
    <!-- Background Video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/videos/video4.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay for readability -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center text-white"
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
      <p class="max-w-2xl mb-10 text-white/80">
        Explore our latest printing and branding projects. From banners and
        t-shirts to packaging and logos — we bring brands to life.
      </p>

      <!-- Gallery Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
      >
        <div
          v-for="(image, index) in gallery"
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <NuxtImg
            :src="image.img"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            alt="Gallery Image"
          />
          <!-- Overlay on hover -->
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
          >
            <p class="text-white font-semibold">View Project</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 <ImagesVideos/>
 </main>
</template>

<script setup lang="ts">
const gallery = [
  {
    img: "/images/services/bottles.jpg",
  },
  {
    img: "/images/services/boxes.jpg",
  },
  {
    img: "/images/services/car.png",
  },
  {
    img: "/images/services/event.jpg",
  },
  {
    img: "/images/services/sticker.jpg",
  },
  {
    img: "/images/services/tshirt.jpeg",
  },
];
</script>
