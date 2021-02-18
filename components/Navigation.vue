<template>
  <nav class="md:flex md:border-b md:justify-between">
    <div class="px-4 h-14 flex items-center justify-between bg-purple-700 border-b border-purple-800 md:bg-white md:border-none md:h-16">
      <div class="flex items-center text-purple-100 md:text-purple-700">
        <svg class="w-8 h-8 fill-current text-purple-200 animate-spin-slow md:text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12 16a4 4 0 104-4 4 4 0 00-4 4zm6 0a2 2 0 11-2-2 2 2 0 012 2z"/><path d="M16 2a13.89 13.89 0 00-7.59 2.23A3 3 0 109 6.28 11.86 11.86 0 0116 4a12 12 0 11-11.08 7.39 1 1 0 00-1.85-.78A14 14 0 1016 2zM6 7a1 1 0 111-1 1 1 0 01-1 1z"/><path d="M22.65 11.56a1 1 0 001.67-1.12 10 10 0 101 9.26 3 3 0 10-2.25.12 8 8 0 11-.38-8.26zM24 16a1 1 0 11-1 1 1 1 0 011-1z"/></svg>
        <h1 class="ml-2 text-2xl lowercase font-display font-medium tracking-wide">
          Universe
        </h1>
      </div>
      <div class="md:hidden">
        <button @click.prevent="toggleNav" class="w-12 h-12 flex items-center text-purple-300 focus:outline-none focus:text-purple-100 hover:text-purple-100 transition">
          <svg class="w-8 h-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h8m-8 6h16" />
            <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="bg-white md:flex md:flex-auto md:items-center md:justify-between">
      <div class="px-4 py-3 bg-white border-b md:order-2 md:py-0 md:border-none">
        <div class="flex items-center">
          <div class="md:flex md:items-center">
            <button @click.prevent="toggleNav" type="button" class="w-11 h-11 text-gray-500 focus:outline-none  rounded-full hidden md:flex items-center justify-center" :class="{ 'bg-purple-600' : isOpen }">
              <img class="w-10 h-10 rounded-full object-cover shadow border-2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600" alt="Esther de Zwart">
            </button>
            <img class="w-16 h-16 rounded-full object-cover shadow border-2 md:hidden" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600" alt="Esther de Zwart">
          </div>
          <div class="ml-3 md:mx-4 md:absolute md:w-64 md:right-0 md:top-0 md:mt-16 md:rounded-md md:shadow-xl md:bg-white" :class="isOpen ? 'block' : 'hidden'">
            <div class="md:rounded-md md:shadow-sm md:py-4 md:px-4 ">
              <h3 class="text-xl font-medium font-display text-gray-700">Esther de Zwart</h3>
              <div class="mt-1 font-medium flex items-center md:items-start"> 
                <a href="#" class="flex items-center text-gray-500 hover:text-gray-600">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-1">Account</span>
                </a>
                <a href="#" class="ml-4 flex items-center text-gray-500 hover:text-gray-600">
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
      <div class="py-4 md:py-0">
        <ul class="md:flex md:px-3">
          <li>
            <a href="#" class="py-1 px-4 text-gray-700 flex items-center rounded-md hover:text-purple-700 md:px-2">
              <div class="md:hidden">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span class="ml-3 font-medium text-lg md:ml-0 md:text-base">
                Campagnes
              </span>
            </a>
          </li>
          <li>
            <a href="#" class="mt-4 py-1 px-4 text-gray-700 flex items-center rounded-md hover:text-purple-700 md:mt-0 md:px-2">
              <div class="md:hidden">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span class="ml-3 font-medium text-lg md:ml-0 md:text-base">
                Selecties
              </span>
            </a>
          </li>
          <li>
            <a href="#" class="mt-4 py-1 px-4 text-gray-700 flex items-center rounded-md hover:text-purple-700 md:mt-0 md:px-2">
              <div class="md:hidden">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span class="ml-3 font-medium text-lg md:ml-0 md:text-base">
                Automation
              </span>
            </a>
          </li>
          <li>
            <a href="#" class="mt-4 py-1 px-4 text-gray-700 flex items-center rounded-md hover:text-purple-700 md:mt-0 md:px-2">
              <div class="md:hidden">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span class="ml-3 font-medium text-lg md:ml-0 md:text-base">
                Statistieken
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
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