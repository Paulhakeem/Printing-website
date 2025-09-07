<template>
  <main class="bg-[#f6f7fb] place-items-center">
    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Title -->
      <div data-aos="fade-up" class="max-w-2xl mb-10">
        <h2
          class="text-lg font-bold text-gray-800 md:text-3xl md:leading-tight dark:text-white"
        >
          Our Services
        </h2>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center"
      >
        <!-- Card -->
        <NuxtLink
          to="/Services"
          v-for="(item, index) in services"
          :key="index"
          data-aos="fade-up"
          class="group block bg-white w-80 h-auto p-4 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Icon :name="item.icon" class="text-4xl text-[#5cc6d0] mb-4" />
          <h2 data-aos="fade-up" class="text-gray-800 text-md font-semibold">
            {{ item.title }}
          </h2>
          <div
            v-for="(service, index) in item.type"
            :key="index"
            class="flex items-center mt-3 gap-2"
          >
            <Icon
              :name="service.icon"
              class="text-[#5cc6d0] text-lg"
              data-aos="fade-up"
            />
            <p
              data-aos="fade-up"
              class="text-gray-500 group-hover:text-gray-600 dark:text-gray-400"
            >
              {{ service.name }}
            </p>
          </div>
        </NuxtLink>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
  </main>
</template>

<script setup>
const { services } = servicesFunc();
</script>
