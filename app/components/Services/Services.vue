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
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
        <!-- Card -->
        <NuxtLink to="/Services"
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
const services = [
  {
    title: "Printing Services",
    icon: "material-symbols:print",
    type: [
      {
        icon: "lets-icons:check-ring",
        name: "Business Cards, Flyers & Brochures",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Posters, Banners & Hoardings",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Product Labels & Stickers",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Custom T-Shirts & Merchandise",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Event Printing (Invitations, Tickets, Badges)",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Large Format Printing (Wall Murals, Vehicle Wraps etc)",
      },
    ],
  },
  {
    title: "Designing Services",
    icon: "iconoir:design-nib-solid",
    type: [
      {
        icon: "lets-icons:check-ring",
        name: "Logo Design & Brand Identity",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Shop Board & Signage Design",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Product & Packaging Design",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Social Media Graphics & Digital Ads",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Custom Illustrations & Creative Artwork",
      },
    ],
  },
  {
    title: "Branding Solutions for Shop Owners",
    icon: "material-symbols:store-rounded",
    type: [
      {
        icon: "lets-icons:check-ring",
        name: "Shop Front Signboards & Glow Signs",
      },
      {
        icon: "lets-icons:check-ring",
        name: "In-Store Branding (Wall Graphics, Posters, Standees)",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Window & Glass Branding",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Staff Uniform Branding (T-Shirts, Caps, Aprons)",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Vehicle Branding (Vinyl Wraps & Stickers)",
      },
    ],
  },
  {
    title: "Website Desing & Development",
    icon: "streamline-ultimate:coding-apps-website-network-globe",
    type: [
      {
        icon: "lets-icons:check-ring",
        name: "Custom Website Design",
      },
      {
        icon: "lets-icons:check-ring",
        name: "E-commerce Development",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Responsive Web Design",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Content Management Systems (CMS)",
      },
      {
        icon: "lets-icons:check-ring",
        name: "Website Maintenance & Support",
      },
    ],
  },
];
</script>
