<script setup lang="ts"></script>

<template>
  <main>
    <div class="sticky z-50 top-0">
      <div class="bg-[#d8f3f4] flex justify-center items-center p-2">
        <h1 class="text-sm font-semibold text-gray-800">
          Welcome to Our Printing & Branding Website
        </h1>
      </div>
      <Sidebar />
    </div>
    <div class="w-full">
      <slot />
       <Whatsapp />
    </div>
    <Footer />
  </main>
</template>
