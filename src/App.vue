<template>
  <v-app>
    <HeaderComponent />
    <v-main class="paddingBot">
      <WelcomePage />
      <StepComponent/>
      <ContactUsComponent />
    <FooterComponent />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import StepComponent from './components/StepComponent';
import WelcomePage from './components/WelcomePage';
import ContactUsComponent from './components/ContactUsComponent';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent,
    StepComponent,
    WelcomePage,
    ContactUsComponent
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
