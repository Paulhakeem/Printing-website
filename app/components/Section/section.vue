<!-- File: pages/services.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Filters -->
    <section
      id="catalog"
      class="border-t border-gray-200 bg-white/80 backdrop-blur"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div
          class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between"
        >
          <!-- Search -->
          <div class="relative w-full lg:max-w-md">
            <input
              v-model="q"
              type="text"
              placeholder="Search services (e.g., banners, mugs, logo)"
              class="w-full rounded-2xl border-gray-300 bg-white px-4 py-3 pr-10 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 i-lucide-search"
            ></span>
          </div>

          <!-- Category Pills -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in ['All', ...categories]"
              :key="cat"
              @click="activeCategory = cat"
              class="rounded-full px-4 py-2 text-sm font-medium ring-1"
              :class="
                activeCategory === cat
                  ? 'bg-[#5cc6d0] text-white'
                  : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50'
              "
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Grid -->
    <section class="py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="item in paginated"
            :key="item.slug"
            data-aos="fade-up"
            class="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100"
            >
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div class="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ item.title }}
                </h3>
                <p class="mt-1 text-sm text-gray-600">{{ item.desc }}</p>
              </div>
              <span
                class="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
              >
                From {{ item.priceFrom }}
              </span>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="t in item.tags"
                :key="t"
                class="rounded-full bg-[#d8f3f4] text-gray-800 px-2.5 py-1 text-[11px] font-medium"
              >
                {{ t }}
              </span>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <NuxtLink
                to="/Services"
                class="text-sm font-semibold text-[#5cc6d0]"
              >
                View details →
              </NuxtLink>
              <button
                @click="openQuote(item)"
                class="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
              >
                Get a quote
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- section page -->
    <section-page />
  </div>
</template>

<script setup lang="ts">
// Nuxt 4 + Vue 3 script setup
import { computed, ref } from "vue";

// Categories you offer
const categories = [
  "Printing",
  "Branding & Design",
  "Merch & Apparel",
  "Signage",
  "Packaging",
  "Events",
];

// Catalog data (sample). Replace images with your own in /public/images/services/*
const catalog = [
  {
    title: "Business Cards",
    slug: "business-cards",
    category: "Printing",
    desc: "Premium cards with matte, gloss, or textured finishes.",
    priceFrom: "KSh 1,500",
    tags: ["Matte/Gloss", "Lamination", "Emboss"],
    image: "/images/services/cards.jpeg",
  },
  {
    title: "Flyers & Brochures",
    slug: "flyers-brochures",
    category: "Printing",
    desc: "Single & tri-fold, full-color marketing flyers.",
    priceFrom: "KSh 2,500",
    tags: ["A5/A4", "Tri-fold", "Full Color"],
    image: "/images/services/flyers.jpeg",
  },
  {
    title: "Large Format Banners",
    slug: "vinyl-banners",
    category: "Signage",
    desc: "Outdoor vinyl or mesh banners with eyelets.",
    priceFrom: "KSh 1,200 / m²",
    tags: ["Outdoor", "Roll-up", "Mesh"],
    image: "/images/services/large.jpeg",
  },
  {
    title: "Stickers & Labels",
    slug: "stickers-labels",
    category: "Printing",
    desc: "Die-cut stickers, product labels, waterproof options.",
    priceFrom: "KSh 800",
    tags: ["Die-cut", "Waterproof", "Packaging"],
    image: "/images/services/sticker.jpg",
  },
  {
    title: "T-Shirt Printing",
    slug: "tshirt-printing",
    category: "Merch & Apparel",
    desc: "DTF, screen print or embroidery for uniforms & promos.",
    priceFrom: "KSh 900",
    tags: ["DTF", "Embroidery", "Screen"],
    image: "/images/services/tshirt.jpeg",
  },
  {
    title: "Mugs & Drinkware",
    slug: "mugs-drinkware",
    category: "Merch & Apparel",
    desc: "Photo mugs, travel tumblers, branded bottles.",
    priceFrom: "KSh 700",
    tags: ["Sublimation", "Gift", "Corporate"],
    image: "/images/services/bottles.jpg",
  },
  {
    title: "Logo & Brand Identity",
    slug: "logo-brand-identity",
    category: "Branding & Design",
    desc: "Logo design, brand guide, typography & colors.",
    priceFrom: "KSh 15,000",
    tags: ["Logo", "Brand Guide", "Stationery"],
    image: "/images/services/logo.jpg",
  },
  {
    title: "Vehicle Branding",
    slug: "vehicle-branding",
    category: "Signage",
    desc: "Full/partial wraps, decals, and magnetic signs.",
    priceFrom: "KSh 25,000",
    tags: ["Wrap", "Decals", "Fleet"],
    image: "/images/services/car.png",
  },
  {
    title: "Custom Packaging",
    slug: "custom-packaging",
    category: "Packaging",
    desc: "Printed boxes, sleeves, and pouches for products.",
    priceFrom: "KSh 12,000",
    tags: ["Boxes", "Sleeves", "Food"],
    image: "/images/services/boxes.jpg",
  },
  {
    title: "Event Branding",
    slug: "event-branding",
    category: "Events",
    desc: "Stage backdrops, wristbands, lanyards, and passes.",
    priceFrom: "KSh 8,000",
    tags: ["Backdrop", "Badges", "Exhibitions"],
    image: "/images/services/event.jpg",
  },
];

const q = ref("");
const activeCategory = ref<"All" | string>("All");
const page = ref(1);
const pageSize = 9;

const filtered = computed(() => {
  const text = q.value.trim().toLowerCase();
  return catalog.filter((item) => {
    const matchesText =
      !text ||
      item.title.toLowerCase().includes(text) ||
      item.desc.toLowerCase().includes(text) ||
      item.tags.join(" ").toLowerCase().includes(text);
    const matchesCat =
      activeCategory.value === "All" || item.category === activeCategory.value;
    return matchesText && matchesCat;
  });
});

const pages = computed(() =>
  Math.max(1, Math.ceil(filtered.value.length / pageSize))
);
const paginated = computed(() => {
  if (page.value > pages.value) page.value = pages.value;
  const start = (page.value - 1) * pageSize;
  return filtered.value.slice(start, start + pageSize);
});

function openQuote(item: { title: string; slug: string }) {
  // Navigate to your quote page with prefilled service
  navigateTo({
    path: "/quote",
    query: { service: item.slug, name: item.title },
  });
}
</script>

<style scoped>
/* Optional icon placeholders if you use Iconify or lucide via UnoCSS / Icones */
.i-lucide-badge-check::before {
  content: "✔";
}
.i-lucide-search::before {
  content: "🔍";
}
</style>
