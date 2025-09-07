<template>
  <div class="bg-[#f6f7fb]">
    <!-- Hero -->
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid -->
      <div
        class="grid md:grid-cols-2 gap-4 pt-20 p-2 md:gap-8 xl:gap-20 md:items-center"
      >
        <div class="pb-4">
          <h2 data-aos="fade-up" class="text-2xl font-bold text-[#5cc6d0]">
            Contact Us
          </h2>
          <p data-aos="fade-up" class="mt-3 text-md text-gray-800 lg:text-md">
            Place your order, ask for a quote, or just say hello! Our team is
            here to assist you with all your printing and branding needs. Fill
            out the form below and we'll get back to you as soon as possible.
          </p>
          <p data-aos="fade-up" class="mt-3 text-md text-gray-800 lg:text-md">
            Add your printing design file if you have any so that we can provide
            you with an accurate quote.
          </p>
          <div class="mt-6 space-y-4 text-gray-800">
            <p data-aos="fade-up" class="flex items-center">
              <Icon
                name="mingcute:whatsapp-fill"
                class="text-2xl mr-1 text-[#5cc6d0]"
              />
              <a href="tel:+254719283858" class="text-gray-800"
                >+254 719 283 858</a
              >
            </p>
            <p data-aos="fade-up" class="flex items-center">
              <Icon
                name="ic:round-email"
                class="text-2xl mr-1 text-[#5cc6d0]"
              />
              <a href="mailto:skywork021@gmail.com" class="text-gray-800"
                >skywork021@gmail.com
              </a>
            </p>
            <p data-aos="fade-up" class="flex items-center">
              <Icon
                name="ic:round-location-on"
                class="text-2xl mr-1 text-[#5cc6d0]"
              />
              <span class="text-gray-800"
                >Mombasa, Tononoka Opp. Noble Ballroom HallWajir RD. Moons</span
              >
            </p>
          </div>
        </div>
        <!-- End Col -->
        <form class="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            class="p-2 border border-gray-300 rounded"
            data-aos="fade-up"
          />
          <input
            type="email"
            placeholder="Your Email"
            class="p-2 border border-gray-300 rounded"
            data-aos="fade-up"
          />
          <input
            type="file"
            class="p-2 border border-gray-300 rounded"
            data-aos="fade-up"
          />
          <textarea
            placeholder="Your Message"
            class="p-2 border border-gray-300 rounded h-32"
            data-aos="fade-up"
          ></textarea>
          <button
            data-aos="fade-up"
            type="submit"
            class="bg-[#5cc6d0] text-white p-2 rounded"
          >
            Send Message
          </button>
        </form>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Hero -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
