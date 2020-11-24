<template>
  <div class="shadow-md bg-white hover:shadow-2xl font-semibold" data-aos="fade-right" data-aos-duration="1000">
    <div class="bg-primary text-center text-white px-2 py-2" v-html="title"> <span></span></div>
    <div class="text-justify text-primary px-4 py-2 ">
      <span>{{description}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "service",
  props:[
          'description',
          'title'
        ]
}
</script>

<style scoped>

</style>
