<template>
  <v-app>
    <HeaderComponent />
    <v-main class="paddingBot">
      <WelcomePage />
      <StepComponent/>
      <FooterComponent />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import WelcomePage from './components/WelcomePage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import StepComponent from './components/StepComponent';


export default {
  name: 'App',

  components: {
    WelcomePage,
    HeaderComponent,
    FooterComponent,
    StepComponent
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
.paddingBot{
  padding-bottom: 54px !important;
}
</style>
