<template>
  <!-- NEWS / ACTIVITIES -->
  <section class="py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
          Fun Learning News
        </h2>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed">
          See the fun activities, lessons, and special moments
          our kids enjoy while learning and growing together.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        <!-- Card 1 -->
        <div class="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 bg-white">
          <div class="relative h-52 flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 opacity-20 rounded-t-2xl"></div>
            <span class="text-4xl z-10">📘</span>
          </div>
          <div class="p-6">
            <span class="text-sm font-semibold text-blue-600">January</span>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              Smart Learning Day
            </h3>
            <p class="mt-3 text-gray-600 leading-relaxed">
              Kids learned new things through games, pictures,
              and fun classroom activities.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 bg-white">
          <div class="relative h-52 flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-tr from-purple-400 to-pink-300 opacity-20 rounded-t-2xl"></div>
            <span class="text-4xl z-10">🎤</span>
          </div>
          <div class="p-6">
            <span class="text-sm font-semibold text-purple-600">March</span>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              Story & Talk Time
            </h3>
            <p class="mt-3 text-gray-600 leading-relaxed">
              Children shared stories, asked questions,
              and learned how to speak confidently.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 bg-white">
          <div class="relative h-52 flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-l from-green-400 to-lime-300 opacity-20 rounded-t-2xl"></div>
            <span class="text-4xl z-10">🏆</span>
          </div>
          <div class="p-6">
            <span class="text-sm font-semibold text-green-600">June</span>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              Learning Achievement Day
            </h3>
            <p class="mt-3 text-gray-600 leading-relaxed">
              Kids were celebrated for good behavior,
              teamwork, and learning progress.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ACHIEVEMENTS SECTION -->
  <section class="w-full">
  <div class="grid lg:grid-cols-2">

    <!-- LEFT: IMAGE -->
    <div class="relative h-80 md:h-[420px] lg:h-[480px] ">
      <img
        src="/assets/pccc.png"
        alt="Kids learning and celebrating"
        class="w-full h-full object-cover"
      />
      <!-- Soft overlay -->
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- RIGHT: TEXT -->
    <div class="flex flex-col md:flex-row items-start items-center bg-[#145DA0] px-8 md:px-16  md:pt-0 md:pb-12  ">
      <div class="max-w-xl text-white md:pb-12 mt-8 md:mt-0 mb-12">

        <span class="inline-block mb-4  text-sm font-semibold uppercase tracking-wider text-white/80">
          Celebrations
        </span>

        <h2 class="text-3xl md:text-4xl font-extrabold leading-tight">
          Kids Achievements & Rewards
        </h2>

        <p class="mt-5 text-lg text-white/90 leading-relaxed">
          We celebrate every child’s effort, improvement,
          and success through rewards and happy moments.
        </p>

        <p class="mt-4 text-white/80 leading-relaxed">
          These celebrations help children feel proud,
          confident, and excited to keep learning every day.
        </p>

      </div>
    </div>

  </div>
</section>
</template>