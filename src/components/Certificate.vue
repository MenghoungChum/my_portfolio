<template>
    <section class="py-20 px-6">
        <!-- Section Title -->
        <div class="text-center mb-14">
            <h2 class="text-4xl font-bold dark:text-white">
                My Certificates
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
                Professional courses and certifications that support my skills
                in networking and web development.
            </p>
        </div>

        <!-- Certificate Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div
                v-for="(cert, index) in certificates"
                :key="index"
                class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
                <!-- Certificate Image -->
                <img
                    :src="cert.image"
                    :alt="cert.title"
                    class="w-full h-56 object-cover"
                >

                <div class="p-6">
                    <h3 class="text-xl font-bold dark:text-white line-clamp-1">
                        {{ cert.title }}
                    </h3>

                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {{ cert.issuer }} • {{ cert.year }}
                    </p>

                    <p class="mt-4 text-gray-600 dark:text-gray-300 line-clamp-3">
                        {{ cert.description}}
                    </p>

                    <div class="mt-6 flex gap-4">
                        <a
                            href=""
                            target="_blank"
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            {{ translate.t('buttnCertificate.view') }}
                        </a>

                        <a
                            :href="cert.image"
                            download
                            class="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                        >
                            {{ translate.t('buttnCertificate.Download') }}
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import CiscoCertificate from '../assets/cisco.jpg'
import CyberCertificate from '../assets/cyber.jpg'
import VueCertificate from '../assets/vue.jpg'
import { useLanguage } from '../composables/useLanguage'

const translate=useLanguage();

const certificateImages = [
    CiscoCertificate,
    CyberCertificate,
    VueCertificate
]



const certificateLinks = [
    '#',
    '#',
    '#'
]

const certificates = computed(() => {
    return translate.tm('certificates.items').map((cert, index) => ({
        ...cert,
        image: certificateImages[index],
        link: certificateLinks[index]
    }))
})
</script>
