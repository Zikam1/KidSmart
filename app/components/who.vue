<template>
  <!-- ABOUT SECTION -->
  <section class="py-24 bg-white text-gray-900">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Text Content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Who We Are
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed">
            We are a professional learning community dedicated to helping children develop strong 
            skills in <strong>English and Mathematics</strong>. Our goal is to build confident, 
            capable learners through structured lessons and guided practice.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Our programs focus on enhancing critical thinking, problem-solving, and communication 
            skills in a safe and supportive environment that promotes academic growth.
          </p>
        </div>

        <!-- Right: Visual Box -->
        <div class="flex justify-center">
          <div class="relative max-w-sm w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/assets/pcc.jpg"
              alt="Children Learning"
              class="w-full h-auto object-cover"
            />

            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none rounded-3xl"></div>

            <!-- Floating dots -->
            <div class="absolute top-12 left-1/4 w-4 h-4 bg-blue-500 rounded-full shadow-lg animate-bounce"></div>
            <div class="absolute top-28 right-1/3 w-4 h-4 bg-yellow-400 rounded-full shadow-lg animate-bounce delay-150"></div>
            <div class="absolute bottom-12 left-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-lg animate-bounce delay-300"></div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- MISSION SECTION -->
  <section class="relative min-h-[50vh] bg-[#145DA0] overflow-hidden flex items-center justify-center">

    <!-- Overlays -->
    <div class="absolute inset-0 bg-black/70"></div>
    <div
      class="absolute inset-0 bg-[#145DA0]
             from-blue-700/70 via-indigo-600/60 to-purple-500/50"
    ></div>

    <!-- Content -->
<div class="relative max-w-3xl mx-auto px-12 text-center text-white space-y-2
            bg-[#145DA0] py-8 md:py-12 lg:py-16 rounded-xl">
  
  <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold">
    Our Mission
  </h2>

  <p class="text-white/90 text-lg leading-relaxed">
    Our mission is to support children in building strong <strong>English and Mathematics skills</strong> 
    while fostering clear thinking, creativity, and effective communication from an early age.
  </p>

  <p class="text-white/80 text-lg leading-relaxed">
    We provide well-structured lessons, guided practice, and consistent support 
    that help children achieve academic success and grow confident in their abilities.
  </p>

</div>
  </section>

  <!-- BENEFITS SECTION -->
  <section class="relative py-20 bg-white">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">

    <!-- Title -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
        What Your Child Will Learn
      </h2>
      <p class="mt-4 text-gray-600 text-lg leading-relaxed">
        Our programs help children improve their English and Maths skills while building confidence, thinking skills, and the ability to express themselves clearly.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      <!-- Benefit 1 -->
      <div class="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Thinking Skills
        </h3>
        <p class="text-gray-600 leading-relaxed">
          Your child will learn how to solve problems in Maths and think logically, helping them approach challenges with confidence in English too.
        </p>
      </div>

      <!-- Benefit 2 -->
      <div class="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Confidence & Communication
        </h3>
        <p class="text-gray-600 leading-relaxed">
          We help children express their ideas clearly in English and feel confident solving Maths problems, so they can succeed in school and at home.
        </p>
      </div>

      <!-- Benefit 3 -->
      <div class="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Step-by-Step Learning
        </h3>
        <p class="text-gray-600 leading-relaxed">
          Lessons are designed to build skills gradually, making learning English and Maths simple, clear, and easy to follow for every child.
        </p>
      </div>

    </div>
  </div>
</section>
</template>
