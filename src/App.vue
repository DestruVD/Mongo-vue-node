<template>
  <v-app>
    <HeaderComponent/>
    <v-main>
      <WelcomePage/>
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import WelcomePage from './components/WelcomePage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

export default {
  name: 'App',

  components: {
    WelcomePage,
    HeaderComponent,
    FooterComponent
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@font-face {
    font-family: "MontSerrat";
    src: url('./font/Montserrat-Regular.ttf');
}

*{
  font-family: "MontSerrat"
}
</style>
