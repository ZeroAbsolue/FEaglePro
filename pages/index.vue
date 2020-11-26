<template>
  <div class="">
    <main class="relative">
      <guest-nav-bar class="my-5"></guest-nav-bar>
      <custom-header class="mb-10"></custom-header>
      <about></about>
      <services></services>
      <process></process>
      <contact></contact>
      <custom-footer></custom-footer>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GuestNavBar from "~/layouts/guestNavBar.vue";
import Service from "~/components/service.vue";
import HeadSectionRight from "~/components/head-section/head-section-right.vue";
import HeadSectionLeft from "~/components/head-section/head-section-left.vue";
import About from "~/components/section/about.vue";
import Services from "~/components/section/services.vue";
import Process from "~/components/section/process.vue";
import Contact from "~/components/section/contact.vue";
import CustomFooter from "~/components/section/customFooter.vue";
import CustomHeader from "~/components/section/customHeader.vue";

export default Vue.extend({
  components: {
    CustomHeader,
    CustomFooter, Contact, Process, Services, About, HeadSectionLeft, HeadSectionRight, Service, GuestNavBar}
})
</script>

<style>

</style>
