<template>
  <div class="flex justify-start">
    <div data-aos="fade-left-0" data-aos-duration="1000">
      <div class="text-primary text-6xl ml-24">
        {{ title }}
      </div>
      <img src="~/assets/img/section_started_left.png" height="350" width="350" alt="desc" id="section_started_left" >
    </div>
  </div>
</template>

<script>
export default {
  name: "head-section-left",
  props:['title']
}
</script>

<style scoped>

</style>
