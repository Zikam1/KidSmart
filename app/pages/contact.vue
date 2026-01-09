<template>
  <section class="bg-white text-gray-900 min-h-screen">
    
    <!-- Header -->
   <!-- Header -->
<header class="bg-[#145DA0] py-6 px-6 md:px-6 flex items-center justify-center min-h-[300px] md:min-h-[200px]">
  <div class="text-center">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-2 text-white">
      Contact Us
    </h1>
    <p class="max-w-3xl text-lg text-blue-100 mx-auto">
      GigglesLearn : A safe and supportive learning space for Growing Minds
    </p>
  </div>
</header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-6 md:px-20 py-20">
      <section class="grid lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Illustration -->
        <div class="relative h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/assets/cont.jpg" 
            alt="Children learning" 
            class="w-full h-full object-cover rounded-xl"
          />
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 rounded-xl"></div>
        </div>

        <!-- Right Contact Info -->
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-[#145DA0]">Get in Touch</h2>
          <p class="text-gray-700 leading-relaxed">
            GigglesLearn welcomes parents, guardians, and partners interested in supporting children’s learning. Reach us for enquiries or general support.
          </p>

          <div class="grid grid-cols-1 gap-6">
            <!-- Address -->
            <div class="flex items-start gap-4">
              <span class="text-[#145DA0] text-2xl">🏠</span>
              <div>
                <h3 class="font-semibold mb-1">Learning Center Address</h3>
                <p>GigglesLearn Learning Center, Safe & Friendly Environment</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <span class="text-[#145DA0] text-2xl">✉️</span>
              <div>
                <h3 class="font-semibold mb-1">Email</h3>
                <p>
                  <a
                    href="mailto:hello@gigglelearn.com"
                    class="text-[#145DA0] font-medium hover:underline"
                  >
                    hello@giggleslearn.com
                  </a>
                </p>
              </div>
            </div>

            <!-- WhatsApp Button (Number Hidden) -->
            <div class="flex items-start gap-4">
              <span class="text-[#145DA0] text-2xl">📱</span>
              <div>
                <h3 class="font-semibold mb-1">WhatsApp</h3>
                <p>
                  <a
                    href="https://wa.me/2348151482035?text=Hello%20GiggleLearn!"
                    target="_blank"
                    class="bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition inline-block"
                  >
                    Chat with us
                  </a>
                </p>
              </div>
            </div>

            <!-- Opening Hours -->
            <div class="flex items-start gap-4">
              <span class="text-[#145DA0] text-2xl">⏰</span>
              <div>
                <h3 class="font-semibold mb-1">Opening Hours</h3>
                <p>Monday – Saturday </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  </section>
</template>

<script setup>
// Pure contact page – no extra logic needed
</script>

<style scoped>
/* Optional: smooth hover effect for the image */
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.03);
}
</style>
