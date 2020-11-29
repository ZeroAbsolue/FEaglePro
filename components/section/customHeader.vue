<template>
  <section class="mb-2 sm:mb-0  sm:h-auto relative grid grid-cols-1 sm:grid-cols-2 bg-primary sm:bg-white sm:content-start">
    <div class="">
      <div class="">
        <img  class="hidden sm:inline"  src="~/assets/img/header_desc.png" alt="desc">
      </div>
      <div class="text-white mx-auto sm:ml-5 sm:absolute sm:top-0 sm:left-0 text-center sm:text-left md:pl-5 lg:pl-2 xl:pl-5" id="project_desc">
        <div class="z-1000">
          <p class="font-bold sm:font-mono text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl mx-auto pt-20 pb-12 sm:pb-0 sm:pt-30  md:pt-32 lg:pt-52 sm:mt-4 lg:mt-20 xl:pt-56 lg:mt-12 xl:mt-0">PROJECT TRACKING</p>

          <p class="w-2/3 sm:w-1/3 md:w-1/3  xl:w-1/3 mx-auto sm:ml-0 sm:mr-20 pb-12 sm:pb-0 text-justify font-semibold text-gray-400">
            <span>Parce que vous désirez consulter pas à pas  dès à présent l'évolution et la réalisation de votre projet.</span>
            <span class="hidden lg:inline">Nous mettons à votre disposition des outils et ressources pour le suivi optimal des objectifs, couts, délais.</span>
          </p>
        </div>
        <div class="inline-flex items-center font-semibold pb-8 sm:pt-2 md:pt-6">
          <div class="text-white text-2xl sm:text-base  lg:text-2xl rounded-full border-2 border-white px-4 py-1">
            <a href="#">Get started</a>
          </div>
          <div class="text-white px-5">
            <svg class="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
    <div class="bg-white h-full pt-5 sm:pt-16 md:pt-32">
      <img class="mx-auto " data-aos="fade-left" data-aos-duration="1000"  src="~/assets/img/project_desc_img.png" alt="desc" id="project_desc_img" >
    </div>
  </section>
</template>

<script>
export default {
  name: "customHeader"
}
</script>

<style scoped>

</style>
