<template>
  <section class="mt-12  bg-white" id="contact">
    <head-section-left :title="`Contact`"></head-section-left>
    <div class="">
      <div class=" grid grid-cols-1 md:grid-cols-2 justify-between mt-5 bg-primary">
        <div class="order-last sm:order-first bg-primary text-white text-left sm:text-center font-semibold mx-4 sm:mx-10 px-8">
          <div class="text-3xl ">Get in touch</div>
          <div class="mb-2">
            <p class="">Nous sommes disponible pour vous servir. Laissez un message, <br>"La valeur n'attend point le nombre des années" </p>
          </div>
          <div class="mb-2"><span>Cameroun, Douala <br/>Ndogpassi, Entrée lycée</span></div>
          <div class="mb-2">
            <span>(+237) 6 91 51 60 82 </span>
            <br>
            <span>(+237)  6 70 37 12 36</span>
          </div >
          <div class="mb-2">
            <span>eaglepro@gmail.com</span>
          </div>
        </div>

        <div class="" style="background: #f0f0f0 ">
           <mail-notification :notify.sync="showNotification"></mail-notification>

          <ValidationObserver ref="observer" v-slot="{ invalid , handleSubmit }">
            <ValidationProvider rules="required" v-slot="{ errors }" :name="$t('name')">
              <div class="my-2 mx-5 flex gap-10 items-center">
                <label  for="name" class=" hidden sm:block text-sm font-medium text-gray-700">Nom</label>
                <input  v-model="form.nom" type="text" id="name"
                        :class="`focus:ring-primary focus:border-primary block w-full sm:text-sm border rounded-md ${errors[0] ? 'border-red-500' :'border-gray-300'}`"
                        placeholder="Nom">
              </div>
              <p class="px-6 sm:px-24 font-medium tracking-wide text-red-500 text-xs ">{{ errors[0] }}</p>
            </ValidationProvider>

            <ValidationProvider rules="required|email" v-slot="{ errors }" :name="$t('email')">
              <div class="my-2 mx-5 flex gap-10 items-center">
                <label for="email" class="hidden sm:block text-sm font-medium text-gray-700">Email</label>
                <input v-model="form.email" type="email" id="email"
                       :class="`focus:ring-primary focus:border-primary block w-full sm:text-sm border rounded-md ${errors[0] ? 'border-red-500' :'border-gray-300'}`"
                       placeholder="Email">
              </div>
              <p class="px-6 sm:px-24 font-medium tracking-wide text-red-500 text-xs ">{{ errors[0] }}</p>
            </ValidationProvider>

            <ValidationProvider rules="required|numeric|min:9" v-slot="{ errors }" :name="$t('phone')">
              <div class="my-2 mx-5 flex gap-2 items-center">
                <label for="telephone" class="hidden sm:block text-sm font-medium text-gray-700">Téléphone</label>
                <input v-model="form.numero" type="tel" id="telephone"
                       :class="`focus:ring-primary focus:border-primary block w-full sm:text-sm border rounded-md ${errors[0] ? 'border-red-500' :'border-gray-300'}`"
                       placeholder="Telephone">
              </div>
              <p class="px-6 sm:px-24 font-medium tracking-wide text-red-500 text-xs ">{{ errors[0] }}</p>
            </ValidationProvider>

            <ValidationProvider rules="required" v-slot="{ errors }" :name="$t('message')">
              <div class="my-2 mx-5 flex gap-5 items-center">
                <label for="message" class="hidden sm:block text-sm font-medium text-gray-700">Message</label>
                <textarea v-model="form.contenu" id="message" rows="3"
                          :class="`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border rounded-md ${errors[0] ? 'border-red-500' :'border-gray-300'}`"
                          placeholder="Votre mesage">
            </textarea>
              </div>
              <p class="px-6 sm:px-24 font-medium tracking-wide text-red-500 text-xs ">{{ errors[0] }}</p>
            </ValidationProvider>

            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" @click="handleSubmit(onSubmit)" :class="`inline-flex justify-center py-2 px-4
                        text-sm font-medium rounded-md text-white bg-primary
                       ${invalid ? 'opacity-50':'hover:bg-primary-light'}`" :disabled="invalid">
                <span v-if="loading">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                Save
              </button>
            </div>
          </ValidationObserver>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Mail from "~/components/Notification/mailNotification";
import MailNotification from "~/components/Notification/mailNotification";

export default {
  name: "contact",
  components: {
    MailNotification,
    Mail,
    ValidationProvider,
    ValidationObserver
  },
  data(){
    return {
      loading:false,
      showNotification:false,
      form:{
        nom:'',
        email:'',
        numero:'',
        contenu:'',
        sujet:'EAGLEPRO MESSAGE'
      }
    }
  },

  methods: {
    clearForm:function(){
      this.form.nom = this.form.email = this.form.contenu = this.form.numero = '';
    },

    async onSubmit(event) {
      // const url = 'http://127.0.0.1:8000/api/send/message';
      const url = 'https://colisxchange.com/api/send/message';
      let data = this.form;
      this.loading = true;
      await this.$axios.$post(url,data).then(res=>{
        this.loading = false;
        this.showNotification = true;
        this.clearForm();
        this.$refs.observer.reset();
      })

    },
  }
}
</script>

<style scoped>

</style>
