<template>
  <div class="mx-auto absolute top-0 left-0  z-1000 w-full">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden ">
          <!-- Mobile menu button-->
          <button @click="toggleActiveHamburgerMenu" class="inline-flex items-center justify-center p-2  text-gray-400 hover:text-white rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg :class="`${activeHamburgerMenu ? 'hidden' : 'block'}  h-6 w-6` " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg :class="`${!activeHamburgerMenu ? 'hidden' : 'block'}  h-6 w-6`" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="px-2 text-white "> EaglePro</span>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center  hidden sm:block sm:text-white">
            EaglePro
<!--            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">-->
<!--            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">-->
          </div>
        </div>
        <div class="hidden sm:block absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="flex justify-end z-1000 " >
            <div class="grid grid-cols-3 gap-4">
              <a href="#about" class="hover:text-black ml-5">About</a>
              <a href="#services" class="hover:text-black">Services</a>
              <a href="#process" class="hover:text-black ">Process</a>
            </div>
            <div class="flex-shrink-0">
              <a href="#contact"
                 class="btn bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary hover:bg-white">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div :class="`${activeHamburgerMenu ? 'block' : 'hidden '} sm:hidden bg-primary-light`">
      <div class="pb-3 space-y-1" @click="toggleActiveHamburgerMenu">
        <a href="#about" class="block px-2 py-2  text-base font-medium text-gray-300 hover:text-white border-l-4  border-transparent hover:border-l-4 hover:border-white ">About</a>
        <a href="#services" class="block px-2 py-2  text-base font-medium text-gray-300 hover:text-white  border-l-4 border-transparent hover:border-l-4 hover:border-white">Services</a>
        <a href="#process" class="block px-2 py-2  text-base font-medium text-gray-300 hover:text-white  border-l-4 border-transparent hover:border-l-4 hover:border-white">Process</a>
        <a href="#contact" class="block px-2 py-2  text-base font-medium text-gray-300 hover:text-white border-l-4 border-transparent hover:border-l-4 hover:border-white">Get started</a>
      </div>
    </div>
<!--    <div class="flex justify-between bg-transparent font-semibold text-xl text-primary">-->
<!--      <div>-->
<!--        <a href="#" class="pl-5 md:pl-10 lg:pl-8 xl:pl-16 mx-auto  absolute z-1000 text-white  text-2xl">EaglePro-->
<!--        </a>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "guestNavBar",
  data(){
    return {
      activeHamburgerMenu:false,
    }
  },
  methods:{
    toggleActiveHamburgerMenu(){
      this.activeHamburgerMenu = !this.activeHamburgerMenu;
    }
  }
}
</script>

<style scoped>

</style>
