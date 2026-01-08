<template>
  <div class="min-h-screen bg-gray-50 px-6 md:px-32 py-10 font-sans flex flex-col gap-12">

    <!-- Welcome Header -->
    <header class="text-center md:text-left mb-10">
      <h1 class="text-3xl md:text-4xl font-extrabold text-[#145DA0] mb-3">
        Welcome, {{ parentName }}!
      </h1>
      <p class="text-gray-700 text-lg md:text-xl max-w-2xl">
        Track your child’s learning journey, monitor progress, and support growth in Maths and English.
      </p>
    </header>

    <!-- Summary Cards -->
    <section class="grid md:grid-cols-3 gap-8 mb-12">
      <div class="summary-card">
        <div class="icon">📈</div>
        <h3>Track Progress</h3>
        <p>Monitor improvements and celebrate milestones.</p>
      </div>

      <div class="summary-card">
        <div class="icon">📄</div>
        <h3>Learning Reports</h3>
        <p>Detailed insights for Maths and English.</p>
      </div>

      <div class="summary-card">
        <div class="icon">🎓</div>
        <h3>Encourage Learning</h3>
        <p>Tips and activities to support learning at home.</p>
      </div>
    </section>

    <!-- Payment + Info -->
    <div class="flex flex-col md:flex-row gap-12">

      <!-- Payment Card -->
      <div class="flex-1 max-w-md">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <!-- Header -->
          <div class="bg-gradient-to-r from-[#145DA0] to-[#0f4c81] text-white text-center py-6 px-6">
            <div class="text-4xl mb-2">💳</div>
            <h3 class="text-xl font-semibold">Make a Payment</h3>
            <p class="text-sm opacity-90">
              Secure subscription payment via Paystack
            </p>
          </div>

          <!-- Body -->
          <div class="p-6 space-y-6">
            <div>
              <label class="block mb-2 font-medium text-gray-700">Amount (₦)</label>
              <input
                v-model="payment.amount"
                type="number"
                placeholder="5000"
                class="input"
              />
            </div>

            <!-- Trust Badge -->
            <div class="flex items-center gap-3 bg-[#145DA0]/5 p-4 rounded-xl text-sm text-gray-700">
              🔒
              <span>
                Payments are processed securely by Paystack.
              </span>
            </div>

            <!-- Paystack Button -->
            <button @click="payWithPaystack" class="primary-btn">
              Pay with Paystack
            </button>

            <p
              v-if="paymentSuccess"
              class="text-green-600 text-center font-semibold"
            >
              Payment successful 🎉
            </p>
          </div>
        </div>
      </div>

      <!-- Info Panel -->
     <div class="w-full md:w-96 h-full"> 
      <div class="bg-gradient-to-b from-[#145DA0]/20 to-white rounded-3xl shadow-2xl p-6 flex flex-col gap-5 border border-[#145DA0]/30 h-full min-h-[400px]"> 
        <h3 class="text-2xl font-bold text-[#145DA0] text-center">Why Pay?</h3> 
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-sm flex-1"> 
          <li>Access full learning reports for your child</li> 
          <li>Track progress in Maths & English</li> 
          <li>Receive tips and activities to support learning</li> 
          <li>Secure and easy payment options</li> 
          <li>Support your child’s growth consistently</li>
           </ul> 
           <div class="bg-white/70 p-4 rounded-xl border border-gray-200 text-gray-700 text-center text-sm">
             🔒 All payments are secured and encrypted. 
             </div> 
             </div> 
             </div> 
             </div>
              </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const parentName = ref('')
const payment = ref({ amount: '' })
const paymentSuccess = ref(false)

onMounted(() => {
  parentName.value = localStorage.getItem('parentName') || 'Parent'

  if (!window.PaystackPop) {
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    document.body.appendChild(script)
  }
})

const payWithPaystack = () => {
  if (!payment.value.amount) {
    alert('Please enter an amount')
    return
  }

  const handler = window.PaystackPop.setup({
    key: 'pk_live_41d795c8630b685b20c4fc66b1e4dac801f8924b',
    email: 'gigglelearnparent@example.com',
    amount: payment.value.amount * 100,
    currency: 'NGN',
    ref: 'GL-' + Math.floor(Math.random() * 1000000),
    callback() {
      paymentSuccess.value = true
    },
    onClose() {
      alert('Payment cancelled')
    }
  })

  handler.openIframe()
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-3 rounded-xl border border-gray-300
  focus:ring-2 focus:ring-[#145DA0] focus:border-[#145DA0];
}

.primary-btn {
  @apply w-full bg-[#145DA0] text-white py-3 rounded-xl font-semibold
  hover:bg-[#0f4c81] transition shadow-md hover:shadow-lg;
}

.summary-card {
  @apply bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl
  transition transform hover:-translate-y-2 flex flex-col gap-3;
}

.summary-card h3 {
  @apply font-bold text-xl text-[#145DA0];
}

.summary-card p {
  @apply text-gray-600 text-sm;
}

.icon {
  @apply text-3xl text-[#145DA0];
}
</style>
