<template>
  <form @submit.prevent="submitForm" class="mt-6 space-y-5 relative z-10">
    <div>
      <label class="block text-sm font-medium text-gray-700">Full Name</label>
      <input
        v-model="form.name"
        type="text"
        required
        placeholder="John Doe"
        class="mt-1 w-full rounded-xl border-gray-300 bg-white/70 backdrop-blur-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 px-4 py-3"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700"
        >Email Address</label
      >
      <input
        v-model="form.email"
        type="email"
        required
        placeholder="you@example.com"
        class="mt-1 w-full rounded-xl border-gray-300 bg-white/70 backdrop-blur-sm shadow-sm focus:border-[#5cc6d0] focus:ring-2 focus:ring-[#5cc6d0] px-4 py-3"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Phone</label>
      <input
        v-model="form.phone"
        type="tel"
        placeholder="+254 712 345678"
        class="mt-1 w-full rounded-xl border-gray-300 bg-white/70 backdrop-blur-sm shadow-sm focus:border-[#5cc6d0] focus:ring-2 focus:ring-[#5cc6d0] px-4 py-3"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700"
        >Service Interested In</label
      >
      <select
        v-model="form.service"
        class="mt-1 w-full rounded-xl border-gray-300 bg-white/70 backdrop-blur-sm shadow-sm focus:border-[#5cc6d0] focus:ring-2 focus:ring-[#5cc6d0] px-4 py-3"
      >
        <option value="">-- Select Service --</option>
        <option>Business Cards</option>
        <option>Banners</option>
        <option>T-Shirts</option>
        <option>Logo & Branding</option>
        <option>Packaging</option>
        <option>Other</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Message</label>
      <textarea
        v-model="form.message"
        rows="4"
        required
        placeholder="Tell us a bit more about your project..."
        class="mt-1 w-full rounded-xl border-gray-300 bg-white/70 backdrop-blur-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 px-4 py-3"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full rounded-xl bg-[#5cc6d0] px-5 py-3 text-white font-semibold shadow-lg cursor-pointer transition"
    >
      🚀 Send Message
    </button>
  </form>
</template>

<script setup>
const form = ref({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

function submitForm() {
  console.log("Form submitted:", form.value);
  alert("Thank you! We have received your message.");
  form.value = { name: "", email: "", phone: "", service: "", message: "" };
}
</script>
