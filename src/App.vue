<template>
  <v-app>
    <HeaderComponent/>
    <v-main>
      <WelcomePage/>
      <BurgerComponent/>
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import WelcomePage from './components/WelcomePage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BurgerComponent from './components/BurgerComponent';

export default {
  name: 'App',

  components: {
    WelcomePage,
    HeaderComponent,
    FooterComponent,
    BurgerComponent
  },

  data: () => ({
    //
  }),
};
</script>
