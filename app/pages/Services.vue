<template>
  <main class="min-h-screen bg-white dark:bg-neutral-900">
    <section
      class="relative h-[60vh] flex items-center justify-center bg-center bg-cover"
      style="background-image: url('/images/machine.jpg')"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Content -->
      <div class="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 class="text-3xl md:text-5xl font-bold">Our Services</h1>
        <p class="mt-4 text-md md:text-xl">
          Discover our range of printing solutions tailored to meet your needs.
        </p>
      </div>
    </section>

    <div>
      <Section />
      <about-page />
    </div>
  </main>
</template>

<script setup></script>
