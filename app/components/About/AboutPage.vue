<template>
  <main>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <!-- Card -->
        <div
          v-for="(item, index) in services"
          :key="index"
          class="flex flex-col bg-white dark:bg-neutral-900 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow"
        >
          <!-- Icon + Title -->
          <div class="flex items-center gap-x-4 mb-4">
            <div data-aos="fade-up"
              class="flex justify-center items-center w-14 h-14 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <Icon data-aos="fade-up" :name="item.icon" class="text-2xl text-[#5cc6d0]" />
            </div>
            <h3  data-aos="fade-up"
              class="text-lg font-semibold text-gray-800 dark:text-white leading-snug"
            >
              {{ item.title }}
            </h3>
          </div>

          <!-- Description -->
          <p data-aos="fade-up" class="text-gray-600 dark:text-neutral-400 leading-relaxed flex-1">
            {{ item.description }}
          </p>
        </div>
        <!-- End Card -->
      </div>
    </div>
  </main>
</template>

<script setup>
const services = [
  {
    title: "Business Printing",
    description:
      "Essential office prints to give your shop a professional identity",
    icon: "pixel:business",
  },
  {
    title: "Marketing & Promotional Printing",
    description:
      "Eye-catching prints to promote your products and attract customers.",
    icon: "mdi:bullhorn-outline",
  },
  {
    title: "Large Format Printing",
    description:
      "Big, bold, and impactful prints that grab attention instantly.",
    icon: "mdi:format-letter-case",
  },
  {
    title: "Packaging & Labels",
    description:
      "Custom packaging that enhances your brand and product appeal.",
    icon: "mdi:package-variant-closed",
  },
  {
    title: "Event Printing",
    description:
      "Professional prints to make every event memorable and well-organized.",
    icon: "mdi:calendar-star",
  },
  {
    title: "Customized & Specialty Printing",
    description: "Unique, branded items that give your shop a personal touch.",
    icon: "mdi:star-outline",
  },
];
</script>
