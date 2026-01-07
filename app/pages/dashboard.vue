<template>
  <div class="min-h-screen bg-gray-50 px-16 md:px-32 py-10 font-sans">

    <!-- Welcome Header -->
    <header class="mb-12 text-center md:text-left">
      <h1 class="text-3xl md:text-4xl font-extrabold text-[#145DA0] mb-3">
        Welcome, {{ parentName }}!
      </h1>
      <p class="text-gray-700 text-lg md:text-xl max-w-2xl">
        Track your child’s learning journey, monitor progress, and support growth in Maths and English.
      </p>
    </header>

    <!-- Dashboard Summary Cards -->
    <section class="grid md:grid-cols-3 gap-8 mb-16">
      <div class="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-start gap-4">
        <div class="text-[#145DA0] text-3xl">
          📈
        </div>
        <h3 class="font-bold text-xl text-[#145DA0]">Track Progress</h3>
        <p class="text-gray-600 text-sm md:text-base">Monitor your child’s improvements in real-time and celebrate their achievements.</p>
      </div>

      <div class="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-start gap-4">
        <div class="text-[#145DA0] text-3xl">
          📄
        </div>
        <h3 class="font-bold text-xl text-[#145DA0]">Learning Reports</h3>
        <p class="text-gray-600 text-sm md:text-base">Access detailed reports for Maths and English to see where they excel or need help.</p>
      </div>

      <div class="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-start gap-4">
        <div class="text-[#145DA0] text-3xl">
          🎓
        </div>
        <h3 class="font-bold text-xl text-[#145DA0]">Encourage Learning</h3>
        <p class="text-gray-600 text-sm md:text-base">Use practical tips and fun exercises to support learning at home.</p>
      </div>
    </section>

    <!-- Real-Time Progress -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Real-Time Progress</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <ProgressCard subject="Mathematics" :progress="75" color="blue" />
        <ProgressCard subject="Reading" :progress="90" color="green" />
        <ProgressCard subject="Science" :progress="60" color="yellow" />
      </div>
    </section>

    <!-- Learning Reports -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Learning Reports</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <ReportSummary />
        <ReportSummary />
      </div>
    </section>

    <!-- Encourage Learning at Home -->
    <section>
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Encourage Learning at Home</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <HomeLearningCard
          title="Today's Activity"
          description="Practice multiplication for 10 minutes."
          icon="📝"
        />
        <HomeLearningCard
          title="Parent Tip"
          description="Ask your child to explain what they learned today."
          icon="💡"
        />
        <HomeLearningCard
          title="Motivation"
          description="🎉 5-day learning streak! Keep it up."
          icon="🏆"
        />
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'


const parentName = ref('')

onMounted(() => {
  parentName.value = localStorage.getItem('parentName') || 'Parent'
})
</script>