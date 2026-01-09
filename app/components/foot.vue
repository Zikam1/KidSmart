<template>
  <div class="font-sans">
    <footer class="bg-white text-gray-900 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div class="grid md:grid-cols-3 gap-12">

          <!-- Left: Logo & Description -->
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <span class="text-xl font-bold">GL</span>
            </div>
            <p class="text-gray-600 leading-relaxed">
              GigglesLearn is a professional learning platform where children strengthen 
              their <strong>English and Mathematics skills</strong> through guided lessons, 
              structured activities, and consistent practice in a safe environment.
            </p>

            <!-- Social Icons -->
            <div class="flex gap-4 mt-2 text-xl">
              <a href="#" class="p-2 rounded-full hover:bg-gray-100 transition">📘</a>
              <a href="#" class="p-2 rounded-full hover:bg-gray-100 transition">📸</a>
              <a href="#" class="p-2 rounded-full hover:bg-gray-100 transition">🐦</a>
            </div>
          </div>

          <!-- Middle: Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Explore</h4>
            <ul class="space-y-4 text-gray-700">
              <li>
                <NuxtLink to="/" class="hover:text-black transition">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="hover:text-black transition">
                  About Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/learning" class="hover:text-black transition">
                  Learning Programs
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:text-black transition">
                  Contact
                </NuxtLink>
              </li>
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
                  href="https://wa.me/2348151482035?text=Hello%20GiggleLearn!"
                  target="_blank"
                  class="bg-[#25D366] text-white px-4 py-1 rounded font-medium hover:bg-green-600 transition inline-block ml-2"
                >
                  Chat with us
                </a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom -->
        <div
          class="border-t border-gray-200 mt-16 pt-6
                 flex flex-col md:flex-row justify-between
                 items-center text-gray-500 text-sm gap-4"
        >
          <p>
            © {{ new Date().getFullYear() }} GigglesLearn.
        
          </p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-black transition">Facebook</a>
            <a href="#" class="hover:text-black transition">Instagram</a>
            <a href="#" class="hover:text-black transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
