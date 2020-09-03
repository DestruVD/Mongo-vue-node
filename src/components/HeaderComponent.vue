<template>
<header>
  <v-card class="overflow-hidden fixed-top">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <BurgerComponent/>

      <v-toolbar-title><img src="../assets/logo.png" alt=""></v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 75px;">

      </v-container>
    </v-sheet>
  </v-card>
</header>
</template>

<script>
import BurgerComponent from '../components/BurgerComponent';

export default {
    name: 'Header',
    components: {
        BurgerComponent
    }
}
</script>

<style scoped>
.fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
}
</style>