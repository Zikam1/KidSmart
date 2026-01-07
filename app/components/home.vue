<template>
  <div class="relative bg-slate-950 text-slate-100 font-sans overflow-hidden h-[80vh]">

    <!-- Floating Icons -->
    <div class="absolute inset-0">
      <span v-for="(icon, i) in icons" :key="i"
            class="absolute text-3xl animate-float"
            :style="{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 90 + 5}%` }">
        {{ icon }}
      </span>
    </div>

    <!-- HERO SECTION -->
    <section class="relative flex items-center justify-center h-full">

      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#072A3D]/90 via-[#0B3C5D]/70 to-[#145DA0]/50"></div>

      <!-- Curved Bottom Separator -->
      <div class="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg class="relative block w-full h-20 md:h-28"
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none"
             viewBox="0 0 1200 120">
          <path d="M321.39,56.9C161.16,77,0,119.5,0,119.5V0H1200V119.5s-161.16-42.5-321.39-62.6C720.92,36.4,600,67.2,479.08,67.2,358.16,67.2,321.39,56.9,321.39,56.9Z"
                fill="#020617"/>
        </svg>
      </div>

      <!-- Content Card -->
      <div class="relative z-10 max-w-3xl text-center px-6 sm:px-12 py-10 rounded-3xl
                  backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl animate-slideUp">
        
        <!-- Badge -->
        <span class="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium animate-fadeIn">
          🎒 Learn • Play • Grow
        </span>

        <!-- Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight animate-slideIn">
          Fun Learning for <span style="color:#1E7ACB">Smart Kids</span>
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto animate-fadeIn delay-200">
          Helping children achieve confidence in English and Mathematics through clear
           instruction, regular practice, and supportive guidance.
        </p>

        <!-- Call-to-Action Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-slideUp delay-400">
          <NuxtLink
            to="/learning"
            class="rounded-xl px-6 py-3 bg-[#1E7ACB] text-white font-semibold hover:opacity-90 transition"
          >
            Start Learning
          </NuxtLink>
          <NuxtLink
            to="/parents"
            class="rounded-xl px-6 py-3 bg-white text-[#1E7ACB] font-semibold hover:opacity-90 transition"
          >
            For Parents
          </NuxtLink>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
const icons = ['📚','🔢','✏️','⭐','🧩','🔤','🖍️','🎨']
</script>

<style>
/* Floating Icons Animation */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Fade in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
}
.animate-fadeIn {
  animation: fadeIn 1s forwards;
}

/* Slide heading from left */
@keyframes slideIn {
  0% { opacity: 0; transform: translateX(-50px);}
  100% { opacity: 1; transform: translateX(0);}
}
.animate-slideIn {
  animation: slideIn 1s forwards;
}

/* Slide card / buttons from bottom */
@keyframes slideUp {
  0% { opacity: 0; transform: translateY(50px);}
  100% { opacity: 1; transform: translateY(0);}
}
.animate-slideUp {
  animation: slideUp 1s forwards;
}

/* Delay helpers */
.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
</style>
