<template>
  <div class="relative w-full mx-auto overflow-hidden">
    <!-- Slides wrapper -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full flex-shrink-0 h-[60vh] sm:h-[70vh] lg:h-[85vh] bg-center bg-cover"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div
          class="h-full w-full bg-black/40 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4"
        >
          <NuxtImg
            v-if="slide.src"
            :src="slide.src"
            alt="logo"
            class="mb-4 size-32 md:size-52 object-contain"
          />
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {{ slide.title }}
          </h2>
          <p class="text-lg sm:text-lg lg:text-xl mb-6 max-w-2xl">
            {{ slide.description }}
          </p>
          <a
            :href="slide.buttonLink"
            class="bg-[#5cc6d0] hover:border-2 hover:border-[#5cc6d0] hover:text-[#5cc6d0] text-white font-semibold py-2 px-4 rounded"
          >
            {{ slide.buttonText }}
          </a>
        </div>
      </div>
    </div>

    <!-- Navigation dots -->
    <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentIndex = index"
        :class="[
          'w-3 h-3 rounded-full',
          currentIndex === index ? 'bg-white' : 'bg-gray-400',
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    image: "/images/logo2.jpg",
    src: "/logo/logo.png",
    title: "Logo Printing",
    description: "Professional logo printing services for your business.",
    buttonText: "Contact Us",
    buttonLink: "/contacts",
  },
  {
    image: "/images/large_format_printer.jpg",
    src: "/logo/logo.png",
    title: "Large paper Printing",
    description:
      "We offer high-quality large format printing services for all your needs.",
    buttonText: "Contact Us",
    buttonLink: "/contacts",
  },
  {
    image: "/images/label_printer.jpeg",
    src: "/logo/logo.png",
    title: "Labels & Stickers",
    description: "Custom labels and stickers for branding and promotions.",
    buttonText: "Contact Us",
    buttonLink: "/contacts",
  },
  {
    image: "/images/t-shirt_printer.jpg",
    src: "/logo/logo.png",
    title: "T-shirts & Bags Printing",
    description: "Custom printed t-shirts and bags for your business or event.",
    buttonText: "Contact Us",
    buttonLink: "/contacts",
  },
];

const currentIndex = ref(0);
let interval;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
  }, 3000); // change slide every 3s
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
