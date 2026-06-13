<template>
  <footer
    class="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10"
    data-aos="fade-up"
  >

    <div class="max-w-7xl mx-auto py-10">

      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- About -->
        <div data-aos="fade-right">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Menghoung Portfolio
          </h3>

          <p class="text-sm leading-6">
            A passionate Web Developer focused on building modern web applications
            using Vue.js, Tailwind CSS, and FastAPI.
          </p>
        </div>

        <!-- Quick Links -->
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Quick Links
          </h3>

          <ul class="space-y-2 text-sm">
            <li><a href="#home" class="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" class="hover:text-blue-500 transition">About</a></li>
            <li><a href="#projects" class="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#contact" class="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div data-aos="fade-left">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Follow Me
          </h3>

          <div class="flex gap-4 text-xl">
            <a href="#" class="hover:text-blue-500 transition">
              <i class="fa-brands fa-github"></i>
            </a>

            <a href="#" class="hover:text-blue-500 transition">
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="#" class="hover:text-blue-500 transition">
              <i class="fa-brands fa-facebook"></i>
            </a>

            <a href="#" class="hover:text-blue-500 transition">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      <!-- Divider -->
      <div
        class="border-t border-gray-300 dark:border-gray-700 my-6"
        data-aos="fade-up"
        data-aos-delay="150"
      ></div>

      <!-- Bottom Section -->
      <div
        class="flex flex-col md:flex-row justify-between items-center text-sm gap-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >

        <p>
          © 2026 Menghoung. All rights reserved.
        </p>

        <p class="text-gray-500 dark:text-gray-400">
          Built with Vue 3 & Tailwind CSS
        </p>

      </div>

    </div>

  </footer>
</template>