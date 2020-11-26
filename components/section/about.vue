<template>
  <section class="" id="about">
    <head-section-right :title="`About`"></head-section-right>
    <div class=" grid grid-cols-1 lg:grid-cols-2 content-start">
      <div class="px-10 py-5" data-aos="fade-right" data-aos-duration="1000">
        <img  src="~/assets/img/about_img.png" alt="desc" class=" mx-auto about_img z-1000" >
      </div>
      <div class="bg-none sm:bg-primary border-0 sm:border-2 mb-12 sm:rounded-full mr-auto" data-aos="fade-left" data-aos-duration="1000">
        <div class="px-5 sm:py-5 text-primary sm:text-white mx-auto sm:mx-20 " >
          <p class="mt-10 pt-6 font-bold ">Notre mission est de vous permettre d'apprécier le produit que vous désirez obtenir le plus rapidement possible tout en respectant coût, délais et objectifs.Nous aimons apprendre, collaborer, et créer de la valeur.</p><br>
          <p class="font-semibold opacity-75 text-justify pb-6 text-align-last-center">
            <!--              <span>Nous mettons à votre disposition les compétences pratiques acquises à travers nos différentes expériences professionnelles pour la réussite de vos projets.</span>-->
            <span> Nous utilisons les technologies et outils les plus éprouvées et les plus à jour pour réaliser vos projets de façon sécurisés et vous les rendre accessibles dès le début de notre échange. </span>
            <span class="">
                Nous vous apportons de manière concrète conseils, orientations et formations de qualité dans le processus de mise en place, refonte d'une plateforme mobile,web ou d'une infrastructure réseau pour vous ou votre entreprise.
              <!--                <br/><br/>Plus aucune raison de remettre à demain le projet de notoriété et/ou de visibilité de vos activités sur le web. Terminé le non respect des besoins exprimés.-->
              </span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>

</style>
