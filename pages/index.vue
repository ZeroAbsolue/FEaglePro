<template>
  <div class="">
    <guest-nav-bar class="m-5"></guest-nav-bar>

    <section class="flex justify-between items-end mbp-50">
      <div>
        <div class="absolute top-0 left-0" >
          <img  src="~/assets/img/header_desc.png" alt="desc" id="header_desc" >
          <div class="text-white" id="project_desc">
            <div >
              <p class="font-bold text-4xl">PROJECT TRACKING</p>
              <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="340" height="1" viewBox="0 0 340 1">
                <line  x2="352" transform="translate(0 0.5)" fill="none" stroke="#eceaea" stroke-width="1"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="340" height="1" viewBox="0 0 340 1">
                <line x2="340" transform="translate(0 0.5)" fill="none" stroke="#eceaea" stroke-width="1"/>
              </svg>

              <p class="w-2/3 py-4 text-justify font-semibold">
                Par ce que vous désirez consulter pas à pas et dès à présent l'évolution de la réalisation de votre projet.
                Nous mettons à votre disposition des outils et ressources pour le suivi optimal des objectifs, couts, délais.
              </p>
            </div>
            <div class="inline-flex items-center font-semibold">
              <div class="text-white text-2xl rounded-full border-2 border-white px-4 py-1">
                <a href="#">Read more</a>
              </div>
              <div class="text-white px-5">
                <svg class="w-12 h-12 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div>
        <img data-aos="fade-left" data-aos-duration="1000"  src="~/assets/img/project_desc_img.png" alt="desc" id="project_desc_img" >
      </div>
    </section>
    <section class="mt-64" id="about">
      <div class="flex justify-end mb-5">
        <div>
          <div class="text-primary text-4xl ml-24">
            About
          </div>
          <img  src="~/assets/img/section_started.png" height="350" width="350" alt="desc" id="section_started" >
        </div>

      </div>
      <div class="grid grid-cols-2 bg-primary ">
        <div class="px-10 py-5" data-aos="fade-right" data-aos-duration="1000">
          <img  src="~/assets/img/about_img.png" alt="desc" class="about_img" >
        </div>
        <div class="py-10 text-white mx-20" data-aos="fade-left" data-aos-duration="1000">
          <p class="font-bold text-justify">Notre mission est de vous permettre d'apprécier le produit que vous désirez obtenir le plus rapidement possible tout en respectant coût, délais et objectifs.Nous aimons apprendre, collaborer, et créer de la valeur.</p><br>
          <p class="font-semibold opacity-75 text-justify">Nous mettons à votre disposition les compétences pratiques acquises à travers nos différentes expériences professionnelles pour la réussite de vos projets. Nous utilisons les technologies et outils les plus éprouvées et les plus à jour pour réaliser vos projets de façon sécurisés et vous les rendre accessibles dès le début de notre échange. Nous vous apportons de manière concrète conseils, orientations et formations de qualité dans le processus de mise en place, refonte d'une plateforme mobile,web ou d'une infrastructure réseau pour vous ou votre entreprise. <br/><br/>Plus aucune raison de remettre à demain le projet de notoriété et/ou de visibilité de vos activités sur le web. Terminé le non respect des besoins exprimés.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GuestNavBar from "~/components/guestNavBar.vue";

export default Vue.extend({
  components: {GuestNavBar}
})
</script>

<style>

</style>
