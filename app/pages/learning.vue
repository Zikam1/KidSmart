<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl font-extrabold text-gray-900">
          Our Learning Programs
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          At GigglesLearn, we focus on building strong foundations through
          simple lessons, caring guidance, and fun learning experiences.
          Our programs are designed for young minds to grow with confidence.
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        <!-- Maths Program -->
        <div class="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition flex flex-col">
          <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-3xl mb-6">
            ➗
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Mathematics
          </h3>

          <p class="text-gray-600 leading-relaxed mb-5">
            We help children understand numbers, shapes, and problem-solving
            in a fun and simple way. Our maths lessons build confidence
            and remove fear from calculations.
          </p>

          <ul class="space-y-3 text-gray-700 mb-6">
            <li>✔ Counting & number sense</li>
            <li>✔ Addition, subtraction & basics of multiplication</li>
            <li>✔ Shapes, patterns & logical thinking</li>
            <li>✔ Simple word problems</li>
          </ul>

          <p class="text-sm text-gray-500 mb-6">
            Age Group: 4 – 12 years
          </p>

          <button
            @click="enroll('Mathematics')"
            class="mt-auto w-full h-14 rounded-xl bg-[#145DA0] text-white font-semibold
                   hover:bg-blue-700 transition
                   flex items-center justify-center gap-2 whitespace-nowrap"
          >
            📱 Enroll for Maths
          </button>
        </div>

        <!-- English Program -->
        <div class="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition flex flex-col">
          <div class="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 text-3xl mb-6">
            📖
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            English Language
          </h3>

          <p class="text-gray-600 leading-relaxed mb-5">
            Our English program helps children read, write, speak,
            and express themselves clearly using simple words and stories.
          </p>

          <ul class="space-y-3 text-gray-700 mb-6">
            <li>✔ Phonics & pronunciation</li>
            <li>✔ Reading comprehension</li>
            <li>✔ Writing simple sentences</li>
            <li>✔ Speaking with confidence</li>
          </ul>

          <p class="text-sm text-gray-500 mb-6">
            Age Group: 4 – 12 years
          </p>

          <button
            @click="enroll('English')"
            class="mt-auto w-full h-14 rounded-xl bg-[#145DA0] text-white font-semibold
                   hover:bg-blue-700 transition
                   flex items-center justify-center gap-2 whitespace-nowrap"
          >
            📱 Enroll for English
          </button>
        </div>

        <!-- IT Program -->
        <div class="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition flex flex-col">
          <div class="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-700 text-3xl mb-6">
            💻
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Computer & IT Skills
          </h3>

          <p class="text-gray-600 leading-relaxed mb-5">
            We introduce children to computers in a safe and guided way,
            helping them understand technology and use it responsibly.
          </p>

          <ul class="space-y-3 text-gray-700 mb-6">
            <li>✔ Basic computer parts & usage</li>
            <li>✔ Typing & mouse control</li>
            <li>✔ Introduction to coding logic</li>
            <li>✔ Online safety awareness</li>
          </ul>

          <p class="text-sm text-gray-500 mb-6">
            Age Group: 6 – 12 years
          </p>

          <button
            @click="enroll('IT')"
            class="mt-auto w-full h-14 rounded-xl bg-[#145DA0] text-white font-semibold
                   hover:bg-blue-700 transition
                   flex items-center justify-center gap-2 whitespace-nowrap"
          >
            📱 Enroll for IT
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const phoneNumber = '2348151482035' // WhatsApp number without +

function enroll(subject) {
  const message = encodeURIComponent(`Hello, I want to enroll for ${subject}.`)
  const url = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(url, '_blank')
}
</script>
