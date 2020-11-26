<template>
  <section class="mt-12 sm:mt-64 pt-3" id="process">
    <head-section-right :title="`Process`"></head-section-right>
    <div class="">
    <div data-aos="fade-right" data-aos-duration="1000">
      <div >
        <p class="text-center font-semibold opacity-75 mb-5">
          <span>La satisfaction nait de la réalisation de l'idée exprimée dans le respect des</span><br>
          <span>contraintes projets (côuts, delais, qualité ) et de la valeur ajouté apporté</span>
        </p>
      </div>
      <div class="flex justify-center mb-5">
        <img class="mt-2" src="~/assets/img/process_img.png"  alt="process" >
      </div>
    </div>
    <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4  pb-32" data-aos="fade-left" data-aos-duration="1000">
      <div class="shadow-2xl">
        <div class="flex justify-center">
          <div class="flex justify-center rounded-full h-6 w-6  bg-primary text-white">1</div>
        </div>
        <div class="bg-primary font-semibold text-white">
          <div class="text-center py-2">Ecoute client</div>
          <div class="text-white px-4 text-center pb-2">Vous détenez la vision et les moyens
            du projet. En vous écoutant, nous
            définissons les objectifs et
            spécifications du projet
          </div>
        </div>
      </div>
      <div class="shadow-2xl">
        <div class="flex justify-center">
          <div class="flex justify-center rounded-full h-6 w-6  bg-primary text-white">2</div>
        </div>
        <div class="bg-white font-semibold text-primary">
          <div class="text-center py-2">Cahier de charges</div>
          <div class="px-4 text-center pb-2">Ensemble nous consignons dans un
            cahier de charges et sur le tableau
            de suivi  de projet les fonctionnalités
            attendues, les délais, les coûts</div>
        </div>
      </div>
      <div class="shadow-2xl md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4">
        <div class="flex justify-center">
          <div class="flex justify-center rounded-full h-6 w-6  bg-primary text-white">3</div>
        </div>
        <div class="bg-primary font-semibold text-white">
          <div class="text-center py-2">Produit minimal viable</div>
          <div class="text-white px-4 text-center pb-2">
            En quelques heures, nous mettons à votre
            disposition un produit minimal viable
            permettant de tester et éprouver
            votre projet final.
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
name: "process"
}
</script>

<style scoped>

</style>
