<template>
<header>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <BurgerComponent/>

      <v-toolbar-title>Rent a Car</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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

</style>