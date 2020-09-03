<template>
  <v-app>
    <HeaderComponent></HeaderComponent>
    <v-main>
      <WelcomePage></WelcomePage>
    </v-main>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import WelcomePage from './components/WelcomePage';
import FooterComponent  from './components/FooterComponent';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    WelcomePage,
    FooterComponent
  },

  data: () => ({
    //
  }),
};
</script>
