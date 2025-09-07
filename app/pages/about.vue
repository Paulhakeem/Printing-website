<template>
  <main>
    <!-- Hero Section -->
    <section
      class="relative h-[60vh] flex items-center justify-center bg-center bg-cover"
      style="background-image: url('/images/machine.jpg')"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Content -->
      <div class="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 class="text-3xl md:text-5xl font-bold">About Us</h1>
        <p class="mt-4 text-md md:text-xl">
          We are committed to delivering innovative solutions that make a
          difference.
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="max-w-5xl mx-auto px-4 py-6 md:py-20">
      <div
        class="items-center grid md:grid-cols-2 gap-4 p-2 md:gap-8 xl:gap-20 md:items-center"
      >
        <div>
          <h2 data-aos="fade-up" class="text-2xl font-bold text-gray-800 md:text-3xl mb-6">
            Who We Are
          </h2>
          <p data-aos="fade-up"
            class="leading-relaxed mt-3 text-md text-gray-800 dark:text-neutral-400 lg:text-lg"
          >
            At Skywork, we help shop owners turn their ideas into eye-catching
            designs and powerful branding. From professional printing to
            creative design and complete shop branding solutions, we make your
            business look unique, professional, and unforgettable. Whether it’s
            signboards, packaging, promotional items, or digital graphics –
            we’ve got everything you need to showcase your shop in style.Our
            journey started with a vision to help businesses grow through
            creativity, technology, and collaboration. Over the years, we’ve
            built a reputation for excellence, delivering projects that inspire
            and create lasting value.
          </p>
        </div>
        <div data-aos="fade-up">
          <img
            class="w-full rounded-md"
            src="/images/large.jpg"
            alt="printing machine"
          />
        </div>
      </div>
    </section>

    <div class="max-w-5xl mx-auto px-4 py-6">
      <div
        class="items-center grid md:grid-cols-2 gap-4 p-2 md:gap-8 xl:gap-20 md:items-center"
      >
        <div data-aos="fade-up" class="bg-[#5cc6d0] p-6 rounded-md text-white">
          <h2 data-aos="fade-up" class="text-xl font-bold text-gray-800 md:text-3xl mb-6">
            Our Mission
          </h2>
          <p data-aos="fade-up" class="text-gray-800 leading-relaxed">
            Empowering Small Shops with Big Ideas through Exceptional Design and
            Printing Solutions.
          </p>
        </div>

        <div data-aos="fade-up" class="bg-[#5cc6d0] p-6 rounded-md text-gray-800">
          <h2 data-aos="fade-up" class="text-xl font-bold text-gray-800 md:text-3xl mb-6">
            Our Vison
          </h2>
          <p data-aos="fade-up" class="text-gray-800 leading-relaxed">
            Turning Small Shops Into Big Brands with Creativity and Innovation.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
