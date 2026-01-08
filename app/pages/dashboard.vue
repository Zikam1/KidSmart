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

    <!-- Dashboard Summary Cards -->
    <section class="grid md:grid-cols-3 gap-8 mb-12">
      <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-start gap-4">
        <div class="text-[#145DA0] text-3xl">📈</div>
        <h3 class="font-bold text-xl text-[#145DA0]">Track Progress</h3>
        <p class="text-gray-600 text-sm md:text-base">
          Monitor your child’s improvements in real-time and celebrate their achievements.
        </p>
      </div>

      <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-start gap-4">
        <div class="text-[#145DA0] text-3xl">📄</div>
        <h3 class="font-bold text-xl text-[#145DA0]">Learning Reports</h3>
        <p class="text-gray-600 text-sm md:text-base">
          Access detailed reports for Maths and English to see where they excel or need help.
        </p>
      </div>

      <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-start gap-4">
        <div class="text-[#145DA0] text-3xl">🎓</div>
        <h3 class="font-bold text-xl text-[#145DA0]">Encourage Learning</h3>
        <p class="text-gray-600 text-sm md:text-base">
          Use practical tips and fun exercises to support learning at home.
        </p>
      </div>
    </section>

    <!-- Payment + Info Panel -->
    <div class="flex flex-col md:flex-row gap-12 items-stretch">

      <!-- LEFT: Payment Card -->
      <div class="flex-1 w-full md:max-w-md h-full">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full min-h-[400px]">
          <!-- Gradient Header -->
          <div class="bg-gradient-to-r from-[#145DA0] to-[#0f4c81] text-white text-center py-4 px-6 flex flex-col items-center gap-2">
            <div class="text-4xl">💳</div>
            <h3 class="text-xl font-semibold">Make a Payment</h3>
            <p class="text-sm opacity-90">Secure payment for your subscription</p>
          </div>

          <div class="p-6 space-y-5 flex-1 flex flex-col">
            <!-- Amount -->
            <div>
              <label class="block mb-2 font-medium text-gray-700">Amount</label>
              <input v-model="payment.amount" type="number" placeholder="1000" class="input" />
            </div>

            <!-- Payment Method Tabs -->
            <div class="flex gap-3 mb-4">
              <button @click="method='bank'" :class="method==='bank'?activeTab:tab" class="flex-1">🏦 Bank</button>
              <button @click="method='card'" :class="method==='card'?activeTab:tab" class="flex-1">💳 Card</button>
            </div>

            <!-- Bank Form -->
            <div v-if="method==='bank'" class="space-y-3">
              <label class="block font-medium text-gray-700">Select Bank</label>
              <select v-model="bank" class="input" @change="goToCardForm">
                <option disabled value="">Choose your bank</option>
                <option>Access Bank</option>
                <option>GTBank</option>
                <option>First Bank</option>
                <option>UBA</option>
                <option>Zenith Bank</option>
              </select>

              <div v-if="bank" class="bg-gray-50 p-3 rounded-xl border border-gray-200 text-sm text-gray-700">
                <p><strong>Bank:</strong> {{ bank }}</p>
                <p><strong>Account Name:</strong> GiggleLearn Ltd</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p class="text-gray-500 mt-1 text-xs">After selecting a bank, complete payment using your card below.</p>
              </div>
            </div>

            <!-- Card Form -->
            <div v-if="method==='card'" class="space-y-4 mt-auto">
              <div>
                <label class="block mb-2 font-medium text-gray-700">Card Number</label>
                <input v-model="card.number" placeholder="1234 5678 9012 3456" class="input" />
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block mb-2 font-medium text-gray-700">MM / YY</label>
                  <input v-model="card.expiry" placeholder="08/27" class="input" />
                </div>
                <div>
                  <label class="block mb-2 font-medium text-gray-700">CVV</label>
                  <input v-model="card.cvv" placeholder="123" class="input" />
                </div>
              </div>

              <div class="flex items-center gap-2">
                <input type="checkbox" v-model="card.save" class="accent-[#145DA0]" />
                <label class="text-gray-700">Save this card for future payments</label>
              </div>

              <!-- Paystack Button -->
              <button @click="payWithPaystack" class="primary-btn">Pay with Paystack</button>
            </div>

            <p v-if="paymentSuccess" class="text-green-600 text-center font-medium mt-2">
              Payment successful 🎉
            </p>
          </div>
        </div>
      </div>

      <!-- RIGHT: Info Panel -->
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

// Payment
const payment = ref({ amount: '' })
const method = ref('card')  // Default to card for Paystack
const paymentSuccess = ref(false)
const card = ref({ number:'', expiry:'', cvv:'', save:false })
const bank = ref('')

// Load parent name
onMounted(() => {
  parentName.value = localStorage.getItem('parentName') || 'Parent'

  // Load Paystack script dynamically
  if (!window.PaystackPop) {
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    document.body.appendChild(script)
  }
})

// Tab styles
const tab = 'px-4 py-2 rounded-xl border border-gray-300 text-sm hover:bg-gray-50 transition'
const activeTab = 'px-4 py-2 rounded-xl bg-[#145DA0] text-white text-sm'

// Switch to card form when bank selected
const goToCardForm = () => { if(bank.value) method.value = 'card' }

// Paystack Payment
const payWithPaystack = () => {
  if(!payment.value.amount){
    alert('Please enter an amount')
    return
  }

  const handler = window.PaystackPop.setup({
    key: 'pk_test_a15491caa8420e991d9ba1749d733be0b4f87b83', // Replace with your public key
    email: 'Gillearnparent@example.com',      // Replace with dynamic user email
    amount: payment.value.amount * 100, // Amount in kobo
    currency: 'NGN',
    ref: 'PSK-' + Math.floor(Math.random()*1000000),
    callback: function(response){
      paymentSuccess.value = true
      alert('Payment complete! Ref: ' + response.reference)
    },
    onClose: function(){
      alert('Payment cancelled.')
    }
  })
  handler.openIframe()
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#145DA0] focus:border-[#145DA0] transition;
}
.primary-btn {
  @apply w-full bg-[#145DA0] text-white py-3 rounded-xl font-semibold hover:bg-[#0f4c81] shadow-md hover:shadow-lg transition;
}
</style>
