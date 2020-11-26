<template>
  <div class="flex justify-end mb-5 mx-0">
    <div data-aos="fade-left" data-aos-duration="1000">
      <div class="text-primary text-6xl ml-20">
        {{ title }}
      </div>
      <img src="~/assets/img/section_started_right.png" height="350" width="350" alt="desc" id="section_started_right" >
    </div>

  </div>
</template>

<script>
export default {
name: "head-section-right",
  props:['title']
}
</script>

<style scoped>

</style>
