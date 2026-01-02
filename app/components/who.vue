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
            We are a fun and friendly learning community created to help children
            grow smarter, more confident, and creative through play-based learning.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Our programs help kids learn important life skills such as thinking,
            problem-solving, teamwork, and creativity in a happy and safe environment.
          </p>
        </div>

        <!-- Right: Visual Box -->
        <div class="flex justify-center">
          <div class="relative max-w-sm w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
             <img
              src="/assets/pcc.jpg"
              alt="World Map"
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
  <div class="relative max-w-3xl mx-auto px-6 text-center text-white space-y-6">

    <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold">
      Our Mission
    </h2>

    <p class="text-white/90 text-lg leading-relaxed">
      Our mission is to help children learn with joy by building strong thinking,
      creativity, and communication skills from an early age.
    </p>

    <p class="text-white/80 text-lg leading-relaxed">
      We create simple lessons, fun activities, and friendly guidance
      that help kids grow academically and socially.
    </p>

  </div>
</section>

  <!-- BENEFITS SECTION -->
  <section class="relative py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Title -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
          What Kids Will Learn
        </h2>
        <p class="mt-4 text-gray-600 text-lg leading-relaxed">
          Our learning program helps children grow smarter, happier,
          and more confident every day.
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
            Kids learn how to think clearly, solve problems, and ask smart questions.
          </p>
        </div>

        <!-- Benefit 2 -->
        <div class="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            Confidence Building
          </h3>
          <p class="text-gray-600 leading-relaxed">
            We help children believe in themselves and express their ideas freely.
          </p>
        </div>

        <!-- Benefit 3 -->
        <div class="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            Fun Learning
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Learning becomes exciting through games, activities, and teamwork.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
