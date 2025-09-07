<template>
  <!-- Features -->
  <main class="bg-[#f6f7fb] pt-10 lg:pt-20">
    <div
      class="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto justify-center"
    >
      <!-- Grid -->
      <div
        class="grid gap-6 grid-cols-2 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 justify-items-center"
      >
        <!-- Stats -->
        <div data-aos="fade-up" v-for="(stat, index) in stats" :key="index">
          <h4
            class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200"
          >
            {{ stat.label }}
          </h4>
          <p class="mt-2 sm:mt-3 text-3xl sm:text-4xl font-bold text-[#5cc6d0]">
            {{ stat.displayValue }}
          </p>
          <p class="mt-1 text-gray-500 dark:text-neutral-500">
            {{ stat.description }}
          </p>
        </div>
        <!-- End Stats -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stats = ref([
  {
    label: "Accuracy rate",
    value: 90.5,
    suffix: "%",
    description: "in fulfilling orders",
    displayValue: "0%",
  },
  {
    label: "Startup businesses",
    value: 1000,
    suffix: "+",
    description: "partner with Skywork",
    displayValue: "0+",
  },
  {
    label: "Happy customer",
    value: 85,
    suffix: "%",
    description: "this year alone",
    displayValue: "0%",
  },
]);

// Count-up animation
const animateValue = (obj, start, end, duration, suffix = "") => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = start + (end - start) * progress;
    obj.displayValue =
      end % 1 !== 0
        ? value.toFixed(2) + suffix // decimals for percentages like 99.95
        : Math.floor(value) + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
};

onMounted(() => {
  stats.value.forEach((stat) => {
    animateValue(stat, 0, stat.value, 2000, stat.suffix); // 2s duration
  });
});
</script>
