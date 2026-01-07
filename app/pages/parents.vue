<template>
  <div class="font-sans bg-gray-50 text-gray-800 min-h-screen">
    <!-- Registration Section -->
    <section id="register" class="bg-[#145DA0]/5 py-20">
      <div class="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Create Your Parent Account</h2>
          <p class="mb-6 text-gray-600">
            Register once and stay involved in your child’s learning journey anytime, anywhere.
          </p>
          <ul class="space-y-3">
            <li>✔ Track progress in real-time</li>
            <li>✔ View learning reports</li>
            <li>✔ Encourage learning at home</li>
          </ul>
        </div>

        <!-- Registration Form -->
        <form @submit.prevent="register" class="bg-white p-8 rounded-3xl shadow-lg space-y-6">
          <div>
            <label class="block mb-4 font-medium">Full Name</label>
            <input v-model="form.name" type="text" required class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#145DA0]" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Email Address</label>
            <input v-model="form.email" type="email" required class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#145DA0]" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Password</label>
            <input v-model="form.password" type="password" required class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#145DA0]" />
          </div>
          <button type="submit" class="w-full bg-[#145DA0] text-white py-4 rounded-xl font-semibold hover:bg-[#0f4c81] transition">
            Create Account
          </button>
          <p v-if="success" class="text-green-600 font-medium text-center">
            Registration successful! 🎉 Redirecting to dashboard...
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const success = ref(false)

const register = () => {
  // Mock registration logic
  console.log('Registered:', form)

  // Store name in localStorage
  localStorage.setItem('parentName', form.name)

  success.value = true

  // Clear form
  form.name = ''
  form.email = ''
  form.password = ''

  // Redirect to dashboard after 1 second
  setTimeout(() => {
    router.push('/dashboard')
  }, 1000)
}
</script>
