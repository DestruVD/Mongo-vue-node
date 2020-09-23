<template>
  <v-app>
    <Header />
    <v-main id="main" class="paddingBot">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({

  }),
};
</script>

<style scoped>
  @import url('./App.scss');
</style>

