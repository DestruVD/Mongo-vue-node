<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text style="text-align: center;">
      <img class="mw" :src="urlImg" alt="">
      <p></p>
      <div class="text--primary">
        <h5>{{actionText}}</h5>
        {{textDesc}}
      </div>
    </v-card-text>
    <v-card-actions style="justify-content: center;">
      <v-btn
        text
        color="deep-purple accent-4"
      >
        {{activableButton}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default{
    name: 'Card',
    props: ['urlImg','actionText','textDesc','activableButton']
}
</script>

<style scoped>
    .mw{
        max-width: 60%;
    }
</style>