<template>
  <div class="">
    <guest-nav-bar class="m-5"></guest-nav-bar>
    <custom-header></custom-header>
    <about></about>
    <services></services>
    <process></process>
    <contact></contact>
    <custom-footer></custom-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GuestNavBar from "~/components/guestNavBar.vue";
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
