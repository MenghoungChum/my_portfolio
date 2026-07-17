<template>
  <div id="works" class="w-full py-10">

    <!-- Title -->
    <h3
      class="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
      data-aos="fade-up"
    >
      My Projects
    </h3>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Card -->
      <div
        v-for="(project, index) in myProjects"
        :key="project.id"
        class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        data-aos="zoom-in-up"
        :data-aos-delay="index * 100"
      >

        <!-- Image -->
        <div class="h-48 overflow-hidden">
          <img
            :src="project.image"
            alt=""
            class="w-full h-full object-cover transition duration-500"
          />
        </div>

        <!-- Content -->
        <div class="p-5 space-y-3">

          <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ project.name }}
          </h4>

          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ project.description }}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 pt-2">
            <a
              :href="project.live"
              target="_blank"
              class="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Live
            </a>

            <a
              :href="project.github"
              target="_blank"
              class="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useLanguage } from '../composables/useLanguage';

    import admin_dashboard from '../assets/admin_dashboard_banner.jpg'
    import ecommerce_banner from '../assets/ecommerce_banner.png'
    import portfolio from '../assets/portfolio_banner.png'

    const imageIndex=[
        ecommerce_banner,
        portfolio,
        ecommerce_banner
    ]
    
    const transition=useLanguage();
    const myProjects=computed(()=>{
        return transition.tm('projects') .map((project,index)=>({
            ...project,
            image: imageIndex[index]
        }))
    })

</script>