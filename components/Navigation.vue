<template>
  <nav class="flex flex-col min-h-screen">
    <div class="px-4 h-14 flex items-center justify-between bg-purple-700 border-b border-purple-800">
      <div class="flex items-center">
        <svg class="w-8 h-8 fill-current text-purple-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12 16a4 4 0 104-4 4 4 0 00-4 4zm6 0a2 2 0 11-2-2 2 2 0 012 2z"/><path d="M16 2a13.89 13.89 0 00-7.59 2.23A3 3 0 109 6.28 11.86 11.86 0 0116 4a12 12 0 11-11.08 7.39 1 1 0 00-1.85-.78A14 14 0 1016 2zM6 7a1 1 0 111-1 1 1 0 01-1 1z"/><path d="M22.65 11.56a1 1 0 001.67-1.12 10 10 0 101 9.26 3 3 0 10-2.25.12 8 8 0 11-.38-8.26zM24 16a1 1 0 11-1 1 1 1 0 011-1z"/></svg>
        <h1 class="ml-2 text-2xl text-purple-100 lowercase font-display font-medium tracking-wide">
          Universe
        </h1>
      </div>
      <div>
        <button @click.prevent="toggleNav" class="w-12 h-12 flex items-center text-purple-300 focus:outline-none focus:text-purple-100 hover:text-purple-100 transition">
          <svg class="w-8 h-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-class="flex-grow-0 h-0 overflow-y-hidden opacity-25"
      enter-to-class="flex-grow-1 h-auto opacity-100"
      leave-class="flex-grow-1 h-auto opacity-100"
      leave-to-class="flex-grow-0 h-0 overflow-y-hidden opacity-25"
    >
      <div v-if="isOpen" class="flex-auto bg-purple-700">
        <div class="px-4 py-3 bg-purple-600 text-purple-100 border-b border-purple-800">
          <div class="flex items-center">
            <img class="w-16 h-16 rounded-full object-cover shadow border-2 border-purple-200" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600" alt="Esther de Zwart">
            <div class="ml-3">
              <h3 class="text-xl font-medium font-display">Esther de Zwart</h3>
              <div class="mt-1 text-purple-300 font-medium flex items-center"> 
                <a href="#" class="flex items-center underline">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-1">Account</span>
                </a>
                <a href="#" class="ml-4 flex items-center underline">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-1">Uitloggen</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>