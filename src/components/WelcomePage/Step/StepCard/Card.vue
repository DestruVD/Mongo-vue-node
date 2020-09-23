<template>
  <v-card
    class="mx-auto shadow"
    max-width="344"
    style="max-height: 384.938px; min-height: 384.938px;"
  >
    <v-card-text style="text-align: center;">
      <img class="mw" :src="cards.img" alt="">
      <p></p>
      <div class="text--primary">
        <h5>{{cards.action}}</h5>
        {{cards.text}}
      </div>

      
    </v-card-text>
    <v-card-actions style="justify-content: center;">
      <v-btn
        text
        color="deep-purple accent-4"
      >
        {{cards.activableButton}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default{
    name: 'Card',
    props: ['cards'],
    data: () => ({
        }),
    components: {
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
    @import url('./Card.scss');
</style>