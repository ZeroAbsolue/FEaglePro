<template>
  <nav class="flex justify-between bg-transparent font-semibold text-xl text-primary">
    <div>
      <a href="#" class="ml-24 absolute z-1000 text-white text-2xl">EaglePro</a>
    </div>
    <div>
      <div class="flex justify-end z-1000 " >
        <div class="grid grid-cols-3 gap-4">
          <a href="#about" class="hover:text-black ml-5">About</a>
          <a href="#" class="hover:text-black">Services</a>
          <a href="#" class="hover:text-black ">Process</a>
        </div>
        <div class="flex-shrink-0">
          <a href="#"
             class="btn bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary hover:bg-white">
            Get started
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "guestNavBar"
}
</script>

<style scoped>

</style>
