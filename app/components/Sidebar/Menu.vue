<template>
  <nav class="bg-gray-800 flex items-center justify-between p-4">
    <!-- Left side menu -->
    <ul class="flex space-x-6">
      <li v-for="(item, index) in useLinks" :key="index">
        <NuxtLink
          :to="item.path"
          class="text-gray-200 hover:border-b hover:border-b-[#d8f3f4] text-sm font-medium tracking-wide uppercase"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>

    <!-- Center icon -->
    <div class="flex justify-end flex-1">
      <img src="/logo/logo.png" alt="logo" class="h-14" />
    </div>
  </nav>
</template>

<script setup>
const { useLinks } = menuFunctions();
</script>
