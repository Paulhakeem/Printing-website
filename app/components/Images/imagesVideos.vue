<template>
  <!-- Gallery Grid -->
  <div class="flex justify-center pt-10">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full justify-items-center"
    >
      <div
        v-for="(item, index) in gallery"
        :key="index"
        class="group relative overflow-hidden rounded-2xl shadow-lg"
      >
        <!-- Image -->
        <NuxtImg
          v-if="item.type === 'image'"
          :src="item.src"
          data-aos="fade-up"
          class="w-80 h-64 object-cover transform group-hover:scale-110 transition duration-500 rounded-2xl"
          alt="Gallery Image"
        />

        <!-- Video -->
        <video
          v-else-if="item.type === 'video'"
          autoplay
          muted
          loop
          playsinline
          data-aos="fade-up"
          class="w-80 h-64 object-cover transform group-hover:scale-110 transition duration-500 rounded-2xl"
        >
          <source :src="item.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
const gallery = [
  { type: "video", src: "/videos/video.mp4" },
  { type: "video", src: "/videos/video2.mp4" },
  { type: "video", src: "/videos/video3.mp4" },
  { type: "video", src: "/videos/video5.mp4" },
  { type: "video", src: "/videos/video6.mp4" },
  { type: "video", src: "/videos/video7.mp4" },
  { type: "video", src: "/videos/video8.mp4" },
  { type: "video", src: "/videos/video9.mp4" },
  { type: "video", src: "/videos/video10.mp4" },
  { type: "video", src: "/videos/video11.mp4" },
  { type: "video", src: "/videos/video12.mp4" },
  { type: "video", src: "/videos/video13.mp4" },
  { type: "video", src: "/videos/video14.mp4" },
  { type: "video", src: "/videos/video15.mp4" },
  { type: "video", src: "/videos/video16.mp4" },
  { type: "video", src: "/videos/video17.mp4" },
];
</script>
