<template>
  <section class="bg-white text-gray-900 min-h-screen">
    
    <!-- Header -->
    <header class="bg-[#145DA0] py-20 px-6">
      <div class="max-w-6xl mx-auto text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Contact Us
        </h1>
        <p class="max-w-3xl text-lg text-blue-100">
          GiggleLearn – A fun and supportive learning space for growing minds
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-6 py-20 space-y-24">

      <!-- Get in Touch Section -->
      <section class="flex flex-col lg:flex-row items-start gap-16">
        
        <!-- Left Illustration -->
        <div class="lg:w-1/2 relative h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <!-- Illustration placeholder -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20"></div>
        </div>

        <!-- Right Contact Info -->
        <div class="lg:w-1/2 space-y-6">
          <h2 class="text-3xl font-bold text-[#145DA0]">Get in Touch</h2>
          <p class="text-gray-700 leading-relaxed">
            GiggleLearn welcomes parents, guardians, and partners interested in supporting children’s learning. Reach us for enquiries or general support.
          </p>

          <div class="grid grid-cols-1 gap-6">
            <!-- Address -->
            <div class="flex items-start gap-4">
              <span class="text-[#145DA0] text-2xl">🏠</span>
              <div>
                <h3 class="font-semibold mb-1">Learning Center Address</h3>
                <p>GiggleLearn Learning Center, Safe & Friendly Environment, Nigeria</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <span class="text-[#145DA0] text-2xl">✉️</span>
              <div>
                <h3 class="font-semibold mb-1">Email</h3>
                <p>hello@GiggleLearning.com</p>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="flex items-start gap-4">
              <span class="text-[#145DA0] text-2xl">📱</span>
              <div>
                <h3 class="font-semibold mb-1">WhatsApp</h3>
                <p>
                  <a
                    href="https://wa.me/2348104233630?text=Hello%20GiggleLearn!"
                    target="_blank"
                    class="text-[#145DA0] font-medium hover:underline"
                  >
                    +234 810 423 3630
                  </a>
                </p>
              </div>
            </div>

            <!-- Opening Hours -->
            <div class="flex items-start gap-4">
              <span class="text-[#145DA0] text-2xl">⏰</span>
              <div>
                <h3 class="font-semibold mb-1">Opening Hours</h3>
                <p>Monday – Friday, 8:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  </section>
</template>

<script setup>
// Pure contact page – no enrollment/programmes
</script>
