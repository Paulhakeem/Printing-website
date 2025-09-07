<template>
  <main class="bg-gray-800">
    <div class="flex p-4 md:hidden lg:hidden">
      <div class="flex justify-between items-center w-full">
        <Icon
          class="cursor-pointer left-2 top-2 text-gray-200"
          size="30"
          name="material-symbols:menu"
          @click="toggleMenu"
        />
        <NuxtImg src="/logo/logo.png" alt="logo" class="h-10" />
      </div>
      <!-- Animated Menu -->
      <Transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 -translate-y-5"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-5"
      >
        <div
          v-if="menu"
          class="fixed w-2/3 h-screen bg-white shadow-lg top-0 left-0 z-40 p-4 mt-4"
        >
          <div class="flex justify-between items-center mb-8">
            <Icon
              class="cursor-pointer"
              size="30"
              name="material-symbols:close"
              @click="toggleMenu"
            />
          </div>
          <nav>
            <ul class="space-y-6">
              <li v-for="(item, index) in useLinks" :key="index">
                <NuxtLink
                  :to="item.path"
                  class="text-gray-800 hover:border-b hover:border-b-[#d8f3f4] text-sm font-medium tracking-wide uppercase"
                  @click="toggleMenu"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
    <div class="hidden md:block lg:block">
      <SidebarMenu />
    </div>
  </main>
</template>

<script setup>
const { useLinks, menu, toggleMenu } = functions();
</script>
