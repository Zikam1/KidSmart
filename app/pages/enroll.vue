<template>
  <section class="bg-white text-gray-900 min-h-screen">
    
    <!-- Header -->
    <header class="bg-[#145DA0] py-20 px-6">
      <div class="max-w-6xl mx-auto text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Learning Programmes & Enrolment
        </h1>
        <p class="max-w-3xl text-lg text-blue-100">
          GigglesLearn – A fun and supportive learning space for growing minds
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-6 py-20 space-y-24">

      <!-- Learning Programmes Section -->
      <section class="flex flex-col lg:flex-row items-start gap-16">

        <!-- Left Content -->
        <div class="lg:w-1/2 space-y-6">
          <p class="text-gray-700 leading-relaxed">
            Parents and guardians can enrol their children in GigglesLearn learning
            programmes designed to build confidence, creativity, and strong
            academic foundations through fun activities and guided lessons.
          </p>

          <div class="grid grid-cols-1 gap-6">
            <!-- Mathematics -->
            <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 class="font-semibold mb-2 text-blue-900 text-lg">Mathematics</h3>
              <p class="text-gray-700 mb-2">
                Fun lessons that help children understand numbers, shapes,
                problem-solving, and logical thinking.
              </p>
              <p class="text-sm text-gray-500 mb-2">Age: 4 – 12 years</p>
              <a
                href="https://wa.me/2348104233630?text=I%20want%20to%20enroll%20my%20child%20in%20Maths%20at%20GiggleLearn."
                target="_blank"
                class="bg-blue-500 text-white w-full py-2 rounded-xl font-semibold hover:bg-blue-600 transition inline-block text-center"
              >
                Enroll for Maths
              </a>
            </div>

            <!-- English Language -->
            <div class="bg-green-50 border-l-4 border-green-400 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 class="font-semibold mb-2 text-green-900 text-lg">English Language</h3>
              <p class="text-gray-700 mb-2">
                Reading, writing, and speaking activities that build confidence
                and communication skills.
              </p>
              <p class="text-sm text-gray-500 mb-2">Age: 4 – 12 years</p>
              <a
                href="https://wa.me/2348104233630?text=I%20want%20to%20enroll%20my%20child%20in%20English%20at%20GigglesLearn."
                target="_blank"
                class="bg-green-500 text-white w-full py-2 rounded-xl font-semibold hover:bg-green-600 transition inline-block text-center"
              >
                Enroll for English
              </a>
            </div>

            <!-- Computer & IT Skills -->
            <div class="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 class="font-semibold mb-2 text-purple-900 text-lg">Computer & IT Skills</h3>
              <p class="text-gray-700 mb-2">
                Basic computer lessons, coding introductions, and safe technology use.
              </p>
              <p class="text-sm text-gray-500 mb-2">Age: 6 – 12 years</p>
              <a
                href="https://wa.me/2348104233630?text=I%20want%20to%20enroll%20my%20child%20in%20Computer%20IT%20at%20GigglesLearn."
                target="_blank"
                class="bg-purple-500 text-white w-full py-2 rounded-xl font-semibold hover:bg-purple-600 transition inline-block text-center"
              >
                Enroll for IT
              </a>
            </div>
          </div>
        </div>

        <!-- Right Illustration -->
        <div class="lg:w-1/2 relative h-80 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <img 
    src="/assets/jui.jpg" 
    alt="Children learning" 
    class="w-full h-full object-cover rounded-xl"
  />
          <!-- Placeholder for image or illustration -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20"></div>
        </div>

      </section>

    </main>
  </section>
</template>

<script setup>
// Enrollment page only – no contact info
</script>