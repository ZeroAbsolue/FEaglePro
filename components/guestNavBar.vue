<template>
  <nav class="flex justify-between bg-transparent font-semibold ">
    <div class=" ">
    <a href="#" class="ml-24 absolute z-1000 text-white text-2xl">EaglePro</a>
    </div>
    <div class="flex justify-end z-1000 " >
      <div class="grid grid-cols-3 gap-3 ">
        <a href="#" class="hover:text-primary">About</a>
        <a href="#" class="hover:text-primary">Services</a>
        <a href="#" class="hover:text-primary">Process</a>
      </div>
      <div class="ml-5">
        <a href="#"
           class="btn bg-primary hover:bg-white text-white hover:text-primary hover:border-primary">
          Get started
        </a>
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
