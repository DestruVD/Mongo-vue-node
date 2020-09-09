<template>
  <v-app>
    <HeaderComponent />
    <v-main id="main" class="paddingBot">
      <router-view />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .paddingBot{
    padding-bottom: 53px !important;
  }
</style>

