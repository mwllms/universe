<template>
  <div class="min-h-screen bg-gray-100 antialiased">
    <header>
      <nav>
        <div class="h-12 bg-purple-500 flex items-center justify-between border-b border-purple-900">
          <button class="px-4 flex items-center text-purple-200 hover:text-purple-100 transition focus:outline-none focus:text-purple-50">
            <div class="animate-spin-slow">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 511.848 511.848" xmlns="http://www.w3.org/2000/svg"><path d="M270.214 368.365c-69.88 0-126.73-56.851-126.73-126.731s56.851-126.731 126.73-126.731 126.731 56.851 126.731 126.731-56.851 126.731-126.731 126.731zm0-223.462c-53.337 0-96.73 43.394-96.73 96.731s43.394 96.731 96.73 96.731c53.338 0 96.731-43.394 96.731-96.731s-43.393-96.731-96.731-96.731zM426.01 120.618c-24.03 0-43.581-19.55-43.581-43.581s19.551-43.581 43.581-43.581 43.58 19.55 43.58 43.581-19.55 43.581-43.58 43.581zm0-57.161c-7.488 0-13.581 6.092-13.581 13.581 0 7.488 6.093 13.581 13.581 13.581s13.58-6.092 13.58-13.581-6.092-13.581-13.58-13.581zM67.323 181.289l-28.76-8.54c14.52-48.893 45.016-92.869 85.871-123.826C166.674 16.918 217.083 0 270.214 0c38.423 0 75.173 8.765 109.229 26.052l-13.58 26.751C336.055 37.672 303.874 30 270.214 30c-46.535 0-90.68 14.812-127.661 42.834-35.8 27.127-62.517 65.643-75.23 108.455zM339.098 473.284l-8.539-28.759c42.812-12.713 81.328-39.43 108.455-75.23 28.022-36.982 42.834-81.127 42.834-127.662 0-37.226-9.802-73.833-28.347-105.865l25.963-15.031c21.186 36.594 32.384 78.399 32.384 120.896 0 53.131-16.917 103.541-48.923 145.78-30.958 40.856-74.934 71.352-123.827 85.871zM201.33 473.284c-38.304-11.375-73.563-32.399-101.965-60.801s-49.427-63.661-60.801-101.965l28.759-8.54c9.957 33.532 28.373 64.409 53.255 89.292 24.883 24.883 55.76 43.298 89.292 53.256zM270.214 511.847c-24.03 0-43.58-19.55-43.58-43.581s19.55-43.581 43.58-43.581 43.581 19.55 43.581 43.581-19.551 43.581-43.581 43.581zm0-57.161c-7.488 0-13.58 6.092-13.58 13.581 0 7.488 6.092 13.581 13.58 13.581s13.581-6.092 13.581-13.581-6.093-13.581-13.581-13.581zM43.581 285.214c-24.03 0-43.581-19.55-43.581-43.58s19.551-43.581 43.581-43.581 43.581 19.55 43.581 43.581-19.551 43.58-43.581 43.58zm0-57.161c-7.488 0-13.581 6.092-13.581 13.581s6.093 13.581 13.581 13.581 13.581-6.092 13.581-13.581-6.093-13.581-13.581-13.581z"/></svg>
            </div>
            <h1 class="ml-2 font-display font-medium tracking-wider uppercase leading-none">Universe</h1>
          </button>
          <div class="px-4">
            <button @click.prevent="toggleNav" class="flex text-purple-200 hover:text-purple-100 transition focus:outline-none focus:text-purple-50">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
        </div>
        <div v-if="isOpen" class="bg-white border-b">
          <div class="inline-flex w-full overflow-x-auto space-x-4">
            <a href="#" class="p-2 w-28 h-28 flex-shrink-0 flex flex-col items-center justify-center text-gray-600">
              <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              <span class="mt-1 font-medium text-sm">Campagnes</span>
            </a>
            <a href="#" class="p-2 w-28 h-28 flex-shrink-0 flex flex-col items-center justify-center text-gray-600">
              <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="mt-1 font-medium text-sm">Selecties</span>
            </a>
            <a href="#" class="p-2 w-28 h-28 flex-shrink-0 flex flex-col items-center justify-center text-gray-600">
              <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span class="mt-1 font-medium text-sm">Automation</span>
            </a>
            <a href="#" class="p-2 w-28 h-28 flex-shrink-0 flex flex-col items-center justify-center text-gray-600">
              <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span class="mt-1 font-medium text-sm">Statistieken</span>
            </a>
            
          </div>
        </div>
      </nav>
    </header>
  </div>
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