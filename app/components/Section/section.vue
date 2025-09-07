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
            <div class="mt-5 flex items-center justify-between cursor-pointer">
              <NuxtLink
                to="/Services"
                class="text-sm font-semibold text-[#5cc6d0]"
              >
                View details →
              </NuxtLink>
              <button
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

<script setup>
const {
  categories,
  catalog,
  q,
  activeCategory,
  page,
  pageSize,
  filtered,
  pages,
  paginated,
  openQuote,
} = sectionFunction();
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
