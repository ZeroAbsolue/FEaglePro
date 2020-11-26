<template>
  <section class="mt-12" id="services">
    <head-section-left :title="`Services`"></head-section-left>
    <div class="">
      <div class="flex justify-center" data-aos="fade-left" data-aos-duration="1000">
        <img src="~/assets/img/services.png" height="250" width="250" alt="services" >
      </div>
      <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-10 mt-2 mb-5 sm:mb-12">
        <service :title="`REDACTION DE CAHIER DE CHARGES <br> (CDC)`"
                 :description="`Une idée est à la base d'un projet, lorsque qu'elle est bien murie et exprimée aussi vague soit elle,
            son analyse donne naissance à une vision de votre offre. Nous vous accompagnons dans le processus d'analyse
            et de transcription de votre idée en un langage compréhensible par des techniciens. En précisant les
            éléments inhérent à la réalisation de votre projet tels: vision, objectifs, besoin fonctionnel, coût,
            délais,...`">
        </service>
        <service :title="`CONCEPTION ET MANAGEMENT DES SYSTÈMES D'INFORMATION`"
                 :description="`Vous avez un CDC et vous désirez l'implémenter ou une idée dont l'un des aspect est
                  la collecte, le stockage, le traitement ou la distribution/présenter de l'information, Nous sommes
                  là pour vous. Avec les nouveaux outils de travail collaboratif (Slack, Trello ), les  ressources
                  matériels (Serveur, application divers) et humaines à notre disposition. En un laps de temps vous
                  obtenez un produit que vous pouvez tester`">
        </service>
        <service :title="`CONCEPTION ET MANAGEMENT   DES SYSTÈMES RÉSEAUX`" class="md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4"
                 :description="`Dans un environnement ou le travail à distance est de plus en plus sollicité,
                  le partage sécurisé des informations ainsi que la sécurisation des environnements
                  de travails n'a jamais été aussi nécessaire. Des systèmes de surveillance , de backup, des systèmes
                  de monitoring sont de plus en plus apprécié. Nous vous accompagnons dans le processus qui vous
                  mènera à la création et la maintenance d'un environnement de travail le plus sécurisé possible`">
        </service>
        <service :title="`Design, graphisme`"
                 :description="`Communiquez autour de votre idée ou concept à partir d'une maquette,des logos,
                  des flyers, catalogues
                  `">
        </service>
        <service :title="`TRADUCTION DE CONTENU`"
                 :description="`Internationalisez vos ressources en les traductions dans les langues que vous
                  désirez le plus. Français, Anglais, Italien
                  `">
        </service>
        <service :title="`FORMATION`" class="md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4"
                 :description="`Vous ou un membre de votre équipe a besoin d'un coup de pouce dans un domaine, c'est
                  avec joie que nous serons là pour vous ou pour lui
                  `">
        </service>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "services"
}
</script>

<style scoped>

</style>
