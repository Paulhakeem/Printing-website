<!-- File: pages/contact.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section
      class="py-16 text-white bg-black/20 object-cover"
      style="background-image: url('/images/logo2.jpg')"
    >
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">Get in Touch</h1>
        <p class="mt-4 text-white/90 max-w-2xl mx-auto">
          Have a project in mind? Need a quick print quote? Fill the form below
          or reach out via our contacts.
        </p>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-12">
      <div
        class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12"
      >
        <!-- Left: Form -->
        <div
          data-aos="fade-up"
          class="relative overflow-hidden rounded-3xl bg-gray-200 shadow-lg ring-1 ring-gray-100 p-8"
        >
          <h2 class="text-2xl font-bold text-[#5cc6d0] relative z-10">
            Send us a Message
          </h2>
          <p class="mt-2 text-gray-600 relative z-10">
            We usually reply within 24 hours.
          </p>
          <!-- form -->
          <ContactFormPage />
          <!-- end -->
        </div>

        <!-- Right: Contact Info -->
        <div class="space-y-8">
          <div data-aos="fade-up">
            <h3 class="text-lg font-bold text-[#5cc6d0]">
              Contact Information
            </h3>
            <p data-aos="fade-up" class="mt-2 text-gray-600">
              You can also reach us directly through the following:
            </p>
            <ul class="mt-4 space-y-2 text-gray-700">
              <li>
                <p data-aos="fade-up" class="flex items-center">
                  <Icon
                    name="mingcute:whatsapp-fill"
                    class="text-2xl mr-1 text-[#5cc6d0]"
                  />
                  <a href="tel:+254719283858" class="text-gray-800"
                    >+254 719 283 858</a
                  >
                </p>
              </li>
              <li>
                <p data-aos="fade-up" class="flex items-center">
                  <Icon
                    name="ic:round-email"
                    class="text-2xl mr-1 text-[#5cc6d0]"
                  />
                  <a href="mailto:skywork021@gmail.com" class="text-gray-800"
                    >skywork021@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p data-aos="fade-up" class="flex items-center">
                  <Icon
                    name="ic:round-location-on"
                    class="text-2xl mr-1 text-[#5cc6d0]"
                  />
                  <span class="text-gray-800"
                    >Mombasa, Tononoka Opp. Noble Ballroom HallWajir RD.
                    Moons</span
                  >
                </p>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up">
            <h3 class="text-lg font-bold text-[#5cc6d0]">Business Hours</h3>
            <ul class="mt-2 text-gray-600">
              <li>Mon - Fri: 8:00am – 6:00pm</li>
              <li>Sat: 9:00am – 2:00pm</li>
              <li>Sun & Holidays: Closed</li>
            </ul>
          </div>

          <div data-aos="fade-up">
            <h3 class="text-lg font-bold text-[#5cc6d0]">Follow Us</h3>
            <onDeactivated class="mt-3 flex gap-3">
              <NuxtLink
                v-for="icons in socialIcons"
                :key="icons.index"
                :to="icons.link"
                class="rounded-full size-10 items-center bg-[#d8f3f4] p-3 text-[#1e2939]"
              >
                <Icon :name="icons.name" class="size-10" />
              </NuxtLink>
            </onDeactivated>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const socialIcons = [
  { name: "mdi:facebook", link: "#" },
  { name: "line-md:twitter-x", link: "#" },
  { name: "logos:tiktok-icon", link: "#" },
  { name: "mdi:instagram", link: "#" },
];
</script>
