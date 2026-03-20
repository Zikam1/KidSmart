<template>
  <div class="font-sans">
    <footer class="bg-white text-gray-900 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        <!-- Main Grid -->
        <div class="grid md:grid-cols-3 gap-12">

          <!-- Left: Logo, Description, Social -->
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold tracking-wide">GL</span>
            </div>

            <p class="text-gray-600 leading-relaxed">
              GigglesLearn is a professional learning platform where children strengthen 
              their <strong>English and Mathematics skills</strong> through guided lessons, 
              structured activities, and consistent practice in a safe environment.
            </p>

            <!-- Social Icons -->
            <div class="flex gap-3 mt-4">
              <a href="https://www.facebook.com/giggleslearntutors/" target="_blank"
                 class="p-3 rounded-full bg-gray-50 hover:bg-blue-50 transition">
                <FontAwesomeIcon :icon="faFacebookF" class="text-blue-600 w-5 h-5"/>
              </a>

              <a href="https://www.instagram.com/giggleslearntutors/" target="_blank"
                 class="p-3 rounded-full bg-gray-50 hover:bg-pink-50 transition">
                <FontAwesomeIcon :icon="faInstagram" class="text-pink-500 w-5 h-5"/>
              </a>

              <a href="https://www.tiktok.com/@giggleslearntutors" target="_blank"
                 class="p-3 rounded-full bg-gray-50 hover:bg-black transition">
                <FontAwesomeIcon :icon="faTiktok" class="text-black w-5 h-5"/>
              </a>
            </div>
          </div>

          <!-- Middle: Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Explore</h4>
            <ul class="space-y-4 text-gray-700">
              <li><NuxtLink to="/" class="hover:text-black transition">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-black transition">About Us</NuxtLink></li>
              <li><NuxtLink to="/learning" class="hover:text-black transition">Learning Programs</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-black transition">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Right: Contact -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Contact</h4>
            <ul class="space-y-4 text-gray-700">
              <li>
                <span class="font-medium">Email:</span> 
                <a href="mailto:hello@giggleslearn.com" class="text-[#145DA0] hover:underline">
                  hello@giggleslearn.com
                </a>
              </li>
              <li>
                <span class="font-medium">WhatsApp:</span>
                <a
                  href="https://wa.me/2347053634056?text=Hello%20GiggleLearn!"
                  target="_blank"
                  class="bg-[#25D366] text-white px-4 py-1 rounded-full font-medium hover:bg-green-600 transition inline-block ml-2 shadow-sm hover:shadow-md"
                >
                  Chat with us
                </a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom: Copyright + Social -->
        <div class="border-t border-gray-200 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            © {{ new Date().getFullYear() }} GigglesLearn.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
</script>