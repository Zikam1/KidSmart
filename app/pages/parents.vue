<!-- Registration Page -->
<template>
  <div class="font-sans bg-gray-50 text-gray-800 min-h-screen">
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        <!-- LEFT: Info Section -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Create Your Parent Account</h2>
            <p class="mb-6 text-gray-600">
              Register once and stay involved in your child’s learning journey anytime, anywhere.
            </p>
            <ul class="space-y-3 mb-6 text-gray-700">
              <li>✔ Track progress in real-time</li>
              <li>✔ View learning reports</li>
              <li>✔ Encourage learning at home</li>
            </ul>
          </div>
        </div>

        <!-- RIGHT: Registration Form -->
        <form @submit.prevent="register" class="bg-white p-8 rounded-3xl shadow-lg space-y-6">
          <h2 class="text-2xl font-bold">Parent Registration</h2>

          <div>
            <label class="block mb-1 font-medium">Full Name</label>
            <input v-model="form.name" required class="input" />
          </div>

          <div>
            <label class="block mb-1 font-medium">Email Address</label>
            <input v-model="form.email" type="email" required class="input" />
          </div>

          <div>
            <label class="block mb-1 font-medium">Password</label>
            <input v-model="form.password" type="password" required class="input" />
          </div>

          <button type="submit" class="primary-btn">Create Account</button>

          <p v-if="registered" class="text-green-600 text-center font-medium">
            Registration successful 🎉 Redirecting...
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

// Registration form
const form = reactive({ name:'', email:'', password:'' })
const registered = ref(false)

const register = () => {
  if(!form.name || !form.email || !form.password){
    alert('Fill all fields')
    return
  }

  // Save name in localStorage
  localStorage.setItem('parentName', form.name)

  registered.value = true
  setTimeout(()=>router.push('/dashboard'), 1000)
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#145DA0];
}
.primary-btn {
  @apply w-full bg-[#145DA0] text-white py-3 rounded-xl font-semibold hover:bg-[#0f4c81] transition;
}
</style>
