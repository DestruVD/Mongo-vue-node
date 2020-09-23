<template>
<header>
  <v-card class="overflow-hidden BorderRadius0 fixed-top">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <Burger />
      <router-link to="/">
        <v-toolbar-title><img src="../../assets/logo.png" alt=""></v-toolbar-title>
      </router-link>
      

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
import Burger from './Burger/Burger';

export default {
    name: 'Header',
    components: {
        Burger
    }
}
</script>

<style lang="scss" scoped>
 @import url('./Header.scss');
</style>