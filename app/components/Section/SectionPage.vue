<template>
  <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-up">
            <p
              class="inline-flex items-center gap-2 rounded-full bg-[#d8f3f4] px-3 py-1 text-xs font-medium text-gray-700"
            >
              <span class="i-lucide-badge-check"></span>
              Print & Brand like a pro
            </p>
            <h1
              class="mt-4 text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
            >
              One-stop Printing & Branding Services
            </h1>
            <p class="mt-4 text-gray-600">
              From business cards to billboards, apparel to packaging—pick what
              you need and get a fast quote.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <NuxtLink
                to="#catalog"
                class="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-gray-200 bg-white hover:bg-gray-100"
              >
                Browse Catalog
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm bg-[#5cc6d0]"
              >
                Get a Custom Quote
              </NuxtLink>
            </div>
          </div>
          <div class="relative">
            <div
              class="aspect-[4/3] w-full rounded-3xl bg-white shadow-md ring-1 ring-gray-100 p-4 grid grid-cols-2 gap-4"
            >
              <div data-aos="fade-up"
                class="rounded-2xl bg-gray-100 flex items-center justify-center text-sm"
              >
                Banners
              </div>
              <div data-aos="fade-up"
                class="rounded-2xl bg-gray-100 flex items-center justify-center text-sm"
              >
                Business Cards
              </div>
              <div data-aos="fade-up"
                class="rounded-2xl bg-gray-100 flex items-center justify-center text-sm"
              >
                T-Shirts
              </div>
              <div data-aos="fade-up"
                class="rounded-2xl bg-gray-100 flex items-center justify-center text-sm"
              >
                Stickers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
